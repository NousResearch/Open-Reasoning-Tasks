# Truth Table Completion

## Description:
This task involves completing truth tables for given logical expressions to evaluate the model's understanding of Boolean logic and its ability to determine the truth value of complex statements.

## Modality:
Text only

## Examples:

### Example 1:

Input:

```
Complete the truth table for the logical expression: (P AND Q) OR (NOT P)
```

Output:

```
| P | Q | P AND Q | NOT P | (P AND Q) OR (NOT P) |
||||-|-|
| T | T |    T    |   F   |          T           |
| T | F |    F    |   F   |          F           |
| F | T |    F    |   T   |          T           |
| F | F |    F    |   T   |          T           |
Explanation: We evaluate each subexpression for all possible combinations of P and Q, then combine them according to the main expression.
```

---

### Example 2:

Input:

```
Complete the truth table for the logical expression: P XOR Q
```

Output:

```
| P | Q | P XOR Q |
||||
| T | T |    F    |
| T | F |    T    |
| F | T |    T    |
| F | F |    F    |
Explanation: XOR (exclusive or) is true when P and Q have different truth values, and false when they have the same truth value.
```

## Tags:
- Logic
- Boolean Algebra
- Truth Tables
- Logical Operators
- Propositional Logic
- --