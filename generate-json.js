import fs from 'fs';
import path from 'path';
import { jsonToTaskString, parseTaskToJSON } from './parser.js';

// Go through all files in the tasks-md directory
const tasksMdDir = './tasks';
const markdownFiles = fs.readdirSync(tasksMdDir);

const tasksDir = './tasks-json';
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

// Now look for markdown files that have been updated

const updatedTasks = markdownFiles.filter(mdFile => {
    const mdContent = fs.readFileSync(path.join(tasksMdDir, mdFile), 'utf-8');
    const taskName = mdFile.split('.md')[0];
    const jsonPath = path.join(tasksDir, `${taskName}.json`);
    const jsonContent = fs.readFileSync(jsonPath, 'utf-8');
    const taskObject = JSON.parse(jsonContent);
    const taskOutput = jsonToTaskString(taskObject);
    return taskOutput !== mdContent;
}).map(mdFile => mdFile.split('.md')[0]);

updatedTasks.forEach(taskName => {
    console.log(`Updating JSON file for task: ${taskName}`);
    const mdPath = path.join(tasksMdDir, `${taskName}.md`);
    const jsonPath = path.join(tasksDir, `${taskName}.json`);
    const mdContent = fs.readFileSync(mdPath, 'utf-8');
    const taskObject = parseTaskToJSON(mdContent);
    fs.writeFileSync(jsonPath, JSON.stringify(taskObject, null, 4));
});