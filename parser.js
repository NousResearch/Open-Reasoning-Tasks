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
            const input = extractBetween(example, 'Input:', 'Output:').replace(/```/g, '').replace(/---/g, '').trim();
            const output = extractBetween(example, 'Output:', '').replace(/```/g, '').replace(/---/g, '').trim();
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

export { parseTaskToJSON, jsonToTaskString };