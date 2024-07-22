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

---

Name: Identifying Logical Fallacies

Description: This task involves identifying and explaining common logical fallacies in given arguments or statements to evaluate the model's ability to recognize flawed reasoning.

Example(s):
- Example 1:
    Input: "All birds can fly. Penguins are birds. Therefore, penguins can fly." What logical fallacy is present in this argument?
    Output: This argument contains the fallacy of Hasty Generalization.
    Explanation: The premise "All birds can fly" is an overgeneralization. While many birds can fly, there are exceptions like penguins, ostriches, and emus. This fallacy occurs when a general conclusion is drawn from a small or unrepresentative sample.

- Example 2:
    Input: "If we allow same-sex marriage, next people will want to marry their pets!" What logical fallacy is present in this statement?
    Output: This statement contains the Slippery Slope fallacy.
    Explanation: The Slippery Slope fallacy assumes that a relatively small first step inevitably leads to a chain of related events resulting in a significant and often undesirable effect. It exaggerates the consequences of a proposed action without providing evidence for the alleged chain reaction.

Diagram (Optional): None

---

Name: Equation Derivation

Description: This task involves deriving mathematical equations from given information or scenarios to evaluate the model's ability to translate word problems into mathematical expressions and manipulate them to reach a solution.

Example(s):
- Example 1:
    Input: Derive an equation for the area of a circle given that the area is proportional to the square of its radius.
    Output: A = πr²
    Explanation: We know the area (A) is proportional to the square of the radius (r²). The constant of proportionality is π (pi). Therefore, the equation is A = πr².

- Example 2:
    Input: A rectangular pool is being filled with water at a constant rate. The length of the pool is twice its width. Derive an equation for the volume of water in the pool after t minutes, given that the height of the water increases by 0.5 cm per minute.
    Output: V = t * w * 2w * 0.5
    Explanation: 
    - Volume = length * width * height
    - Length = 2 * width
    - Height after t minutes = 0.5t cm
    - Substituting: V = (2w) * w * (0.5t/100) = tw²/100
    - Final equation: V = 0.01tw², where V is in cubic meters, t in minutes, and w in meters.

Diagram (Optional): None

---

Name: Proof Verification

Description: This task involves verifying mathematical proofs to evaluate the model's ability to understand logical arguments, identify correct steps in a proof, and spot errors or gaps in reasoning.

Example(s):
- Example 1:
    Input: Verify the following proof that the square root of 2 is irrational:
    1. Assume √2 is rational.
    2. Then √2 = a/b, where a and b are integers with no common factors.
    3. Squaring both sides: 2 = a²/b²
    4. Multiply both sides by b²: 2b² = a²
    5. Therefore, a² is even, so a must be even.
    6. Let a = 2k for some integer k.
    7. Substituting: 2b² = (2k)² = 4k²
    8. Simplifying: b² = 2k²
    9. Therefore, b² is even, so b must be even.
    10. But this contradicts that a and b have no common factors.
    11. Therefore, our initial assumption must be false, and √2 is irrational.
    
    Output: The proof is correct. It uses the method of contradiction and follows logical steps to show that assuming √2 is rational leads to a contradiction, thereby proving that √2 must be irrational.

- Example 2:
    Input: Verify the following proof that for any integer n, if n² is even, then n is even:
    1. Assume n is odd.
    2. Then n = 2k + 1 for some integer k.
    3. n² = (2k + 1)² = 4k² + 4k + 1 = 2(2k² + 2k) + 1
    4. Therefore, n² is odd.
    5. This contradicts the given that n² is even.
    6. So, our assumption must be false, and n must be even.
    
    Output: The proof is correct. It uses proof by contradiction effectively. By assuming n is odd and showing that this leads to n² being odd (which contradicts the given information), the proof logically concludes that n must be even.

Diagram (Optional): None

---

Name: Completing Analogies

Description: This task involves completing analogies in the form "A is to B as C is to ?" to evaluate the model's ability to recognize relationships between pairs of words and apply them to new contexts.

Example(s):
- Example 1:
    Input: Complete the analogy: Tree is to forest as brick is to ?
    Output: Building
    Explanation: A tree is a component of a forest, just as a brick is a component of a building.

- Example 2:
    Input: Complete the analogy: Pen is to writer as brush is to ?
    Output: Painter
    Explanation: A pen is the primary tool used by a writer, just as a brush is the primary tool used by a painter.

Diagram (Optional): None

---