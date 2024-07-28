import fs from 'fs';
import path from 'path';

import { jsonToTaskString, parseTaskToJSON } from './parser.js';
const tasksJsonDir = './tasks-json';
const tasksMdDir = './tasks';

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