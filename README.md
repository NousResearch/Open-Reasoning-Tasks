# Open-Reasoning-Tasks
![image](https://github.com/user-attachments/assets/2527a05e-afbc-4145-9daa-96f0229600f6)

# LLM Reasoning Task Collection

Welcome to the **LLM Reasoning Task Collection** repository! This project is an open collaboration to create a comprehensive master list of reasoning tasks that can teach, elicit, or show reasoning samples to large language models (LLMs) for training purposes.

# Synthetic Reasoning Tasks

These tasks, contained in the `synthetic-tasks` folder, are identical in all respects to the standard reasoning tasks, except that they are generated synthetically using a consensus-based method with multiple LLMs. A single source model generates a task with examples, and if those examples are solvable by multiple different LLMs, the task is considered valid. This generally selects for correct solutions, but does impair the ability to generate tasks that are difficult for LLMs to solve. Therefore, the majority of synthetic tasks are quite easy. 

## Contents

- [Open-Reasoning-Tasks](#open-reasoning-tasks)
- [LLM Reasoning Task Collection](#llm-reasoning-task-collection)
  - [Contents](#contents)
  - [Introduction](#introduction)
  - [Schema](#schema)
  - [Example Entry](#example-entry)
  - [Contributing](#contributing)
  - [License](#license)

## Introduction

The goal of this repository is to gather a diverse set of reasoning tasks designed to improve the reasoning capabilities of LLMs. Contributors are encouraged to submit tasks, provide examples, and optionally include diagrams or workflows to illustrate how the tasks function. 

## Schema

--- 

# Reasoning Task Name

## Description: {Text description of the task} 


## Modality: {whether it is text only, image+text-> text, etc}


## Examples:

### Example 1:

Input:
```
Karen is 25. The age to vote is 18. Can Karen vote?
```  

Output:
```
Yes
```  

---

### Example 2:


Input:
```
Dog's eat bread. Bread comes from wheat. Do dogs eat food made from wheat?
```  

Output:
```
Yes
```  

---


## Diagram (Optional): 

{image here} 


## Citations:
- Citation 1
- Citation 2


## Tags:
- Tag 1
- Tag 2
- ...

---


### Example Entry

---

# Reasoning Task 

## Description: This task involves providing a series of syllogisms to the model to evaluate its logical reasoning capabilities. 


## Modality: Text


## Examples:

### Example 1:

Input:
```
Karen is 25. The age to vote is 18. Can Karen vote?
```  

Output:
```
Yes
```  

---

### Example 2:


Input:
```
Dog's eat bread. Bread comes from wheat. Do dogs eat food made from wheat?
```  

Output:
```
Yes
```  

---

## Contributing

We welcome contributions from everyone! To contribute, please see our [Contribution Guide](CONTRIBUTING.md).

## License

This project is licensed under the Apache 2.0 License. See the [LICENSE](LICENSE) file for details.
