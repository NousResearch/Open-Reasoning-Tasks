# Contributing to LLM Reasoning Task Collection

Thank you for your interest in contributing to the **LLM Reasoning Task Collection**! We appreciate your help in building a valuable resource for improving the reasoning capabilities of large language models (LLMs).

## How to Contribute

1. **Fork the Repository**: Start by forking the repository to your GitHub account.

2. **Clone the Repository**: Clone the forked repository to your local machine.

```bash
git clone https://github.com/YourUsername/Open-Reasoning-Tasks.git
```  

3. **Create a New Branch**: Create a new branch for your contribution.

```bash
git checkout -b add-new-task
```


4. **Add Your Task**: To add a new task, you need to do two things:

   a. Add a new row to the `tasks.md` file in the root directory.
   b. Create a new file in the `tasks-md/` directory for your task.

5. **Update tasks.md**: Add a new row to the table in `tasks.md` using this format:

```markdown
| Task Name | Brief description of the task. |
```
    Ensure the task name is in title case and the link uses lowercase with hyphens.

6. **Create Task File**: In the `tasks-md/` directory, create a new file named `task-name.md` (use lowercase and hyphens). Use the template provided in [tasks/template.md](task-template.md).

8. **Build the Task**: Tasks are stored in JSON, but are contributed in markdown. Run `npm run build` to convert the markdown to JSON, and then convert it back. This will ensure that the markdown is correctly formatted, and that the structured data contained within the task has been logged correctly. If something about the markdown in your reconstructed file is off, you likely submitted the task incorrectly.


7. **Commit Your Changes**: Commit your changes with a meaningful commit message.

```bash
git add tasks.md tasks/your-new-task.md
git commit -m "Add new task: Task Name"
```  

9. **Push Your Branch**: Push your branch to your forked repository.

```bash
git push origin add-new-task
```  

10. **Create a Pull Request**: Go to the original repository on GitHub and create a pull request from your forked repository. Provide a clear description of the task you are submitting and its purpose.

## Guidelines

- Ensure your task is clear and well-defined.
- Provide multiple examples to illustrate the task.
- Use relevant tags to categorize your task.
- Follow the existing format and style of the repository.
- Make sure your task file name matches the link in tasks.md.

Thank you for contributing!