# Stack-Based Reasoning

## Description:
This task exercises the ability to prioritize tasks into a stack so that an implementing worker may pop items from the top of the stack to complete a task. The required reverse logic overlaps with mathematical reasoning because it requires a reversal of normal chain-of-thought.    Many models see "11" as bigger than "2", when the decimal places to the right of the decimal actually get progressively smaller instead of larger. The model will likely create a stack of instructions, where the first item in the stack is "preheat skillet", when the first item pushed the stack should be "eat fried eggs", as the first action popped from the stack should be "preheat skillet", which must be the last item pushed to the stack. This requires the model to plan the list, then reverse the items. It does help if you request the model to show the stack as it goes.

## Modality:
Text only

## Examples:

### Example 1: 

Input:
```
Which number is bigger, 0.11 or 0.2
```

Output:
```
0.2 is larger than 0.11
```

---

### Example 2: 

Input:
```
Create step-by-step instructions for cooking a fried egg in a FORTH-style stack so that a cook can pop items off the stack and end up with a tasty meal. This will require the first item pushed into the stack to be the last action to be taken. use the PUSH keywork for each item.
```

Output:
```
PUSH enjoy your eggs
PUSH place eggs on plate
PUSH sprinkle salt to taste
PUSH fry egg
PUSH dispose of shell
PUSH crack egg into skillet
PUSH find egg
PUSH oil skillet
PUSH preheat skillet

Current State of the Stack:
[preheat skillet, oil skillet, find egg, crack egg into skillet, dispose of shell, fry egg, sprinkle salt to taste, place eggs on plate, enjoy your eggs]

Check stack-based reasoning:
POP.
Returns `preheat skillet`

preheat skillet is the first correct step to take.

```

## Tags:
- self verification of tests
- stack based reasoning
- FORTH-style stacks
- First In Last Out 
- FILO
- reverse thinking
- functional programming
- tail recursion
