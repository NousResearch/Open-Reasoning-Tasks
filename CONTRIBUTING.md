# Contributing to LLM Reasoning Task Collection

Thank you for your interest in contributing to the **LLM Reasoning Task Collection**! We appreciate your help in building a valuable resource for improving the reasoning capabilities of large language models (LLMs).

## How to Contribute

1. **Fork the Repository**: Start by forking the repository to your GitHub account.

2. **Clone the Repository**: Clone the forked repository to your local machine.
    ```bash
    git clone https://github.com/NousResearch/Open-Reasoning-Tasks.git
    ```

3. **Create a New Branch**: Create a new branch for your contribution.
    ```bash
    git checkout -b add-new-task
    ```

4. **Add Your Task**: Add your task to the `tasks.md` file using the schema provided in the [README](README.md).

5. **Commit Your Changes**: Commit your changes with a meaningful commit message.
    ```bash
    git add tasks.md
    git commit -m "Add new task: {Task Name}"
    ```

6. **Push Your Branch**: Push your branch to your forked repository.
    ```bash
    git push origin add-new-task
    ```

7. **Create a Pull Request**: Go to the original repository on GitHub and create a pull request from your forked repository. Provide a clear description of the task you are submitting and its purpose.

## Task Schema

Please follow the task schema below when adding a new task:

```
Name: {Task Name, String}

Description: {Details of what the task is, String}

Example(s) {list of example inputs and outputs for the task, String}:

- Example 1:
    input and output

- Example 2:
   input and output

Diagram (Optional) {image of a diagram/workflow of how the task would work, Image}
```

### Example Entry
```
Name: Syllogism Reasoning

Description: This task involves providing a series of syllogisms to the model to evaluate its logical reasoning capabilities.

Example(s):
- Example 1:
    Input: All men are mortal. Socrates is a man. What can we conclude?
    Output: Socrates is mortal.

- Example 2:
    Input: All fruits have seeds. An apple is a fruit. What can we conclude?
    Output: An apple has seeds.

Diagram (Optional): None
```

## Guidelines

- Ensure your task is clear and well-defined.
- Provide multiple examples if you can, to illustrate the task.
- Optionally include a diagram or workflow image to enhance understanding.
- Follow the existing format and style of the repository.

Thank you for contributing!
