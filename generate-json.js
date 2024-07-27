import fs from 'fs';
import path from 'path';

function parseTaskToJSON(taskString) {
    const taskObject = {
        name: '',
        description: '',
        modality: '',
        diagram: null,
        citations: null,
        examples: [],
        tags: []
    };

    // Helper function to extract content between two patterns
    function extractBetween(text, startPattern, endPattern) {
        const startIndex = text.indexOf(startPattern);
        if (startIndex === -1) return '';
        const endIndex = endPattern ? text.indexOf(endPattern, startIndex + startPattern.length) : text.length;
        return text.slice(startIndex + startPattern.length, endIndex !== -1 ? endIndex : undefined).trim();
    }

    // Extract name
    taskObject.name = extractBetween(taskString, '# ', '\n').trim();

    // Extract description
    taskObject.description = extractBetween(taskString, '## Description:', '##').trim();

    // Extract modality
    taskObject.modality = extractBetween(taskString, '## Modality:', '##').trim();

    // Extract diagram
    const diagramContent = extractBetween(taskString, '## Diagram (Optional):', '##').trim();
    taskObject.diagram = diagramContent || null;

    // Extract citations
    const citationsContent = extractBetween(taskString, '## Citations (Optional):', '##');
    if (citationsContent) {
        taskObject.citations = citationsContent.split('\n')
            .filter(line => line.trim().startsWith('-'))
            .map(line => line.trim().slice(1).trim());
    }

    // Extract examples
    const examplesContent = extractBetween(taskString, '## Examples:', '## Tags:');
    const exampleMatches = examplesContent.match(/### Example \d+:([\s\S]*?)(?=### Example \d+:|$)/g);
    if (exampleMatches) {
        taskObject.examples = exampleMatches.map(example => {
            const input = extractBetween(example, 'Input:', 'Output:').replace(/```/g, '').trim();
            const output = extractBetween(example, 'Output:', '').replace(/```/g, '').trim();
            return [{ input, output }];
        });
    }

    // Extract tags
    const tagsContent = extractBetween(taskString, '## Tags:', '');
    taskObject.tags = tagsContent.split('\n')
        .filter(line => line.trim().startsWith('-'))
        .map(line => line.trim().slice(1).trim());

    return taskObject;
}

// Go through all files in the tasks-md directory
const tasksMdDir = './tasks-md';
const markdownFiles = fs.readdirSync(tasksMdDir);

const tasksDir = './tasks';
const taskFiles = fs.readdirSync(tasksDir);

// Find files that are in tasks-md but not in tasks

const missingTasks = markdownFiles.filter(mdFile => {
    const taskName = mdFile.split('.md')[0];
    return !taskFiles.includes(`${taskName}.json`);
});

const missingTaskFiles = missingTasks.map(taskName => {
    const mdPath = path.join(tasksMdDir, `${taskName}`);
    const mdContent = fs.readFileSync(mdPath, 'utf-8');
    const taskObject = parseTaskToJSON(mdContent);
    return { name: taskName, object: taskObject };
});

missingTaskFiles.forEach(({ name, object }) => {
    console.log(`Creating JSON file for task: ${name}`);
    const jsonPath = path.join(tasksDir, `${name.split('.md')[0]}.json`);
    fs.writeFileSync(jsonPath, JSON.stringify(object, null, 4));
});