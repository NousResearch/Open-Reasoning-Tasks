# Towers of Hanoi

## Description:
Solve the classic Towers of Hanoi puzzle. Given a number of disks and three pegs, move all disks from the first peg to the last peg following these rules: 1) Only one disk can be moved at a time. 2) Each move consists of taking the upper disk from one stack and placing it on top of another stack or on an empty peg. 3) No larger disk may be placed on top of a smaller disk.

## Modality:
Text only

## Examples:

### Example 1:

Input:

```
Solve Towers of Hanoi for 3 disks.
```

Output:

```
Here's the solution for Towers of Hanoi with 3 disks:

1. Move disk 1 from A to C
2. Move disk 2 from A to B
3. Move disk 1 from C to B
4. Move disk 3 from A to C
5. Move disk 1 from B to A
6. Move disk 2 from B to C
7. Move disk 1 from A to C

The puzzle is now solved with all disks moved from peg A to peg C.
```

---

### Example 2:

Input:

```
How many moves are required to solve Towers of Hanoi for 5 disks?
```

Output:

```
To solve the Towers of Hanoi puzzle with 5 disks, you need 31 moves.

The number of moves required for n disks can be calculated using the formula:

2^n - 1

For 5 disks:
2^5 - 1 = 32 - 1 = 31 moves

This is the minimum number of moves required to solve the puzzle while following all the rules.
```

## Tags:
- Problem Solving
- Recursion
- Mathematical Puzzle
- Algorithm
- Game Theory