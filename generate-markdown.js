import fs from 'fs';
import path from 'path';

function jsonToTaskString(taskObject) {
    let taskString = '';

    // Helper function to add a section if it exists
    function addSection(title, content, formatter = (x) => x) {
        if (content) {
            taskString += `## ${title}:\n${formatter(content)}\n\n`;
        }
    }

    // Add task name
    taskString += `# ${taskObject.name}\n\n`;

    // Add description
    addSection('Description', taskObject.description);

    // Add modality
    addSection('Modality', taskObject.modality);

    // Add diagram if it exists
    addSection('Diagram (Optional)', taskObject.diagram);

    // Add citations if they exist
    if (taskObject.citations && taskObject.citations.length > 0) {
        addSection('Citations (Optional)', taskObject.citations, (citations) =>
            citations.map(citation => `- ${citation}`).join('\n')
        );
    }

    // Add examples
    if (taskObject.examples && taskObject.examples.length > 0) {
        taskString += '## Examples:\n\n';
        taskObject.examples.forEach((example, index) => {
            taskString += `### Example ${index + 1}:\n\n`;
            example.forEach(turn => {
                taskString += `Input:\n\n\`\`\`\n${turn.input}\n\`\`\`\n\n`;
                taskString += `Output:\n\n\`\`\`\n${turn.output}\n\`\`\`\n\n`;
            });
            // Add separator after each example except the last one
            if (index < taskObject.examples.length - 1) {
                taskString += '---\n\n';
            }
        });
    }

    // Add tags
    if (taskObject.tags && taskObject.tags.length > 0) {
        addSection('Tags', taskObject.tags, (tags) =>
            tags.map(tag => `- ${tag}`).join('\n')
        );
    }

    return taskString.trim();
}
const tasksJsonDir = './tasks';
const tasksMdDir = './tasks-md';

// Ensure the output directory exists
if (!fs.existsSync(tasksMdDir)) {
    fs.mkdirSync(tasksMdDir);
}

const jsonFiles = fs.readdirSync(tasksJsonDir);

jsonFiles.forEach(file => {
    if (path.extname(file) === '.json') {
        const jsonPath = path.join(tasksJsonDir, file);
        const mdPath = path.join(tasksMdDir, file.replace('.json', '.md'));

        // Read and parse the JSON file
        const jsonContent = fs.readFileSync(jsonPath, 'utf8');
        const taskObject = JSON.parse(jsonContent);

        // Convert the JSON object to a markdown string
        const taskString = jsonToTaskString(taskObject);

        // Write the markdown string to a file
        fs.writeFileSync(mdPath, taskString);

        console.log(`Converted ${file} to markdown`);
    }
});

console.log('Conversion complete!');