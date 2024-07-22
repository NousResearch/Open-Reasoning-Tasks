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

---

Name: Mathematical Word Problems

Description: This task involves solving mathematical word problems to evaluate the model's ability to interpret real-world scenarios, extract relevant information, and perform appropriate calculations.

Example(s):
- Example 1:
    Input: Sarah has 24 cookies. She wants to share them equally among her 6 friends. How many cookies will each friend receive?
    Output: Each friend will receive 4 cookies.
    Explanation: To solve this, we divide the total number of cookies (24) by the number of friends (6): 24 ÷ 6 = 4.

- Example 2:
    Input: A train travels at a speed of 60 miles per hour. How far will it travel in 2.5 hours?
    Output: The train will travel 150 miles.
    Explanation: We multiply the speed (60 miles/hour) by the time (2.5 hours): 60 * 2.5 = 150 miles.

Diagram (Optional): None

---

Name: Deductive Logic Puzzles

Description: This task involves solving deductive logic puzzles to evaluate the model's ability to use given information, make logical inferences, and arrive at a correct conclusion.

Example(s):
- Example 1:
    Input: There are five houses in a row, each painted a different color. The English person lives in the red house. The Spaniard owns a dog. Coffee is drunk in the green house. The Ukrainian drinks tea. The green house is immediately to the right of the ivory house. Who owns the snail?
    Output: The French person owns the snail.
    Explanation: This is a complex puzzle that requires multiple steps of deduction. The full solution involves creating a grid and eliminating possibilities based on the given clues.

- Example 2:
    Input: Alice, Bob, and Charlie are standing in a line. Alice is not last. Bob is not first. Who is in the middle?
    Output: Bob is in the middle.
    Explanation: If Alice is not last and Bob is not first, the only possible arrangement is: Charlie, Bob, Alice.

Diagram (Optional): None

---

Name: Lateral Thinking Puzzles

Description: This task involves solving lateral thinking puzzles to evaluate the model's ability to think creatively, consider unconventional scenarios, and ask relevant questions to reach the correct solution.

Example(s):
- Example 1:
    Input: A man pushes his car to a hotel and tells the owner he's bankrupt. Why?
    Output: The man is playing Monopoly.
    Explanation: This puzzle requires thinking outside the box. The scenario described doesn't make sense in real life, but it's a common situation in the board game Monopoly.

- Example 2:
    Input: A woman shoots her husband, then holds him under water for five minutes. Next, she hangs him. But five minutes later they both go out and enjoy a wonderful dinner together. How can this be?
    Output: The woman is a photographer. She shot a picture of her husband, developed it in water, and hung it up to dry.
    Explanation: This puzzle relies on the multiple meanings of words like "shoot" and "hang" to create a misleading scenario.

Diagram (Optional): None

---

Name: Truth Table Completion

Description: This task involves completing truth tables for given logical expressions to evaluate the model's understanding of Boolean logic and its ability to determine the truth value of complex statements.

Example(s):
- Example 1:
    Input: Complete the truth table for the logical expression: (P AND Q) OR (NOT P)
    Output:
    | P | Q | P AND Q | NOT P | (P AND Q) OR (NOT P) |
    |---|---|---------|-------|----------------------|
    | T | T |    T    |   F   |          T           |
    | T | F |    F    |   F   |          F           |
    | F | T |    F    |   T   |          T           |
    | F | F |    F    |   T   |          T           |
    Explanation: We evaluate each subexpression for all possible combinations of P and Q, then combine them according to the main expression.

- Example 2:
    Input: Complete the truth table for the logical expression: P XOR Q
    Output:
    | P | Q | P XOR Q |
    |---|---|---------|
    | T | T |    F    |
    | T | F |    T    |
    | F | T |    T    |
    | F | F |    F    |
    Explanation: XOR (exclusive or) is true when P and Q have different truth values, and false when they have the same truth value.

Diagram (Optional): None
