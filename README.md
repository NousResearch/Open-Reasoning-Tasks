# Open-Reasoning-Tasks
A comprehensive repository of reasoning tasks for LLMs (and beyond)

# LLM Reasoning Task Collection

Welcome to the **LLM Reasoning Task Collection** repository! This project is an open collaboration to create a comprehensive master list of reasoning tasks that can teach, elicit, or show reasoning samples to large language models (LLMs) for training purposes.

## Contents

- [Introduction](#introduction)
- [Schema](#schema)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The goal of this repository is to gather a diverse set of reasoning tasks designed to improve the reasoning capabilities of LLMs. Contributors are encouraged to submit tasks, provide examples, and optionally include diagrams or workflows to illustrate how the tasks function. 

## Schema

When submitting a task, please adhere to the following schema:

```
Name: {Task Name, String}
Description: {Details of what the task is, String}
Example(s) {list of example inputs and outputs for the task, String}:

Example 1 input and output
Example 2 input and output
Diagram (Optional) {image of a diagram/workflow of how the task would work, Image}`
```

### Example Entry

```
Name: Syllogism Reasoning
Description: This task involves providing a series of syllogisms to the model to evaluate its logical reasoning capabilities.
Example(s):

Input: All men are mortal. Socrates is a man. What can we conclude?
Output: Socrates is mortal.
Input: All fruits have seeds. An apple is a fruit. What can we conclude?
Output: An apple has seeds.
Diagram (Optional):
```

## Contributing

We welcome contributions from everyone! To contribute, please see our [Contribution Guide](CONTRIBUTING.md).

## License

This project is licensed under the Apache 2.0 License. See the [LICENSE](LICENSE) file for details.
