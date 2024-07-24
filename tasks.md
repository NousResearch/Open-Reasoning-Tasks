Name: Syllogism Reasoning

Description: This task involves providing a series of syllogisms to the model to evaluate its logical reasoning capabilities.

Example(s):
- Example 1:

Input:

All men are mortal. Socrates is a man. What can we conclude?

Output:

Socrates is mortal.

- Example 2:

Input:

All fruits have seeds. An apple is a fruit. What can we conclude?

Output:

An apple has seeds.

---

Name: Mathematical Word Problems

Description: This task involves solving mathematical word problems to evaluate the model's ability to interpret real-world scenarios, extract relevant information, and perform appropriate calculations.

Example(s):
- Example 1:

Input:

Sarah has 24 cookies. She wants to share them equally among her 6 friends. How many cookies will each friend receive?

Output:

Each friend will receive 4 cookies.
Explanation: To solve this, we divide the total number of cookies (24) by the number of friends (6): 24 ÷ 6 = 4.

- Example 2:

Input:

A train travels at a speed of 60 miles per hour. How far will it travel in 2.5 hours?

Output:

The train will travel 150 miles.
Explanation: We multiply the speed (60 miles/hour) by the time (2.5 hours): 60 * 2.5 = 150 miles.

---

Name: Deductive Logic Puzzles

Description: This task involves solving deductive logic puzzles to evaluate the model's ability to use given information, make logical inferences, and arrive at a correct conclusion.

Example(s):
- Example 1:

Input:

There are five houses in a row, each painted a different color. The English person lives in the red house. The Spaniard owns a dog. Coffee is drunk in the green house. The Ukrainian drinks tea. The green house is immediately to the right of the ivory house. Who owns the snail?

Output:

The French person owns the snail.
Explanation: This is a complex puzzle that requires multiple steps of deduction. The full solution involves creating a grid and eliminating possibilities based on the given clues.

- Example 2:

Input:

Alice, Bob, and Charlie are standing in a line. Alice is not last. Bob is not first. Who is in the middle?

Output:

Bob is in the middle.
Explanation: If Alice is not last and Bob is not first, the only possible arrangement is: Charlie, Bob, Alice.

---

Name: Lateral Thinking Puzzles

Description: This task involves solving lateral thinking puzzles to evaluate the model's ability to think creatively, consider unconventional scenarios, and ask relevant questions to reach the correct solution.

Example(s):
- Example 1:

Input:

A man pushes his car to a hotel and tells the owner he's bankrupt. Why?

Output:

The man is playing Monopoly.
Explanation: This puzzle requires thinking outside the box. The scenario described doesn't make sense in real life, but it's a common situation in the board game Monopoly.

- Example 2:

Input:

A woman shoots her husband, then holds him under water for five minutes. Next, she hangs him. But five minutes later they both go out and enjoy a wonderful dinner together. How can this be?

Output:

The woman is a photographer. She shot a picture of her husband, developed it in water, and hung it up to dry.
Explanation: This puzzle relies on the multiple meanings of words like "shoot" and "hang" to create a misleading scenario.

---

Name: Truth Table Completion

Description: This task involves completing truth tables for given logical expressions to evaluate the model's understanding of Boolean logic and its ability to determine the truth value of complex statements.

Example(s):
- Example 1:

Input:

Complete the truth table for the logical expression: (P AND Q) OR (NOT P)

Output:

| P | Q | P AND Q | NOT P | (P AND Q) OR (NOT P) |
|---|---|---------|-------|----------------------|
| T | T |    T    |   F   |          T           |
| T | F |    F    |   F   |          F           |
| F | T |    F    |   T   |          T           |
| F | F |    F    |   T   |          T           |
Explanation: We evaluate each subexpression for all possible combinations of P and Q, then combine them according to the main expression.

- Example 2:

Input:

Complete the truth table for the logical expression: P XOR Q

Output:

| P | Q | P XOR Q |
|---|---|---------|
| T | T |    F    |
| T | F |    T    |
| F | T |    T    |
| F | F |    F    |
Explanation: XOR (exclusive or) is true when P and Q have different truth values, and false when they have the same truth value.

---
Name: Identifying Logical Fallacies

Description: This task involves identifying and explaining common logical fallacies in given arguments or statements to evaluate the model's ability to recognize flawed reasoning.

Example(s):
- Example 1:

Input:

"All birds can fly. Penguins are birds. Therefore, penguins can fly." What logical fallacy is present in this argument?

Output:

This argument contains the fallacy of Hasty Generalization.
Explanation: The premise "All birds can fly" is an overgeneralization. While many birds can fly, there are exceptions like penguins, ostriches, and emus. This fallacy occurs when a general conclusion is drawn from a small or unrepresentative sample.

- Example 2:

Input:

"If we allow same-sex marriage, next people will want to marry their pets!" What logical fallacy is present in this statement?

Output:

This statement contains the Slippery Slope fallacy.
Explanation: The Slippery Slope fallacy assumes that a relatively small first step inevitably leads to a chain of related events resulting in a significant and often undesirable effect. It exaggerates the consequences of a proposed action without providing evidence for the alleged chain reaction.

---

Name: Equation Derivation

Description: This task involves deriving mathematical equations from given information or scenarios to evaluate the model's ability to translate word problems into mathematical expressions and manipulate them to reach a solution.

Example(s):
- Example 1:

Input:

Derive an equation for the area of a circle given that the area is proportional to the square of its radius.

Output:

A = πr²
Explanation: We know the area (A) is proportional to the square of the radius (r²). The constant of proportionality is π (pi). Therefore, the equation is A = πr².

- Example 2:

Input:

A rectangular pool is being filled with water at a constant rate. The length of the pool is twice its width. Derive an equation for the volume of water in the pool after t minutes, given that the height of the water increases by 0.5 cm per minute.

Output:

V = t * w * 2w * 0.5
Explanation: 
- Volume = length * width * height
- Length = 2 * width
- Height after t minutes = 0.5t cm
- Substituting: V = (2w) * w * (0.5t/100) = tw²/100
- Final equation: V = 0.01tw², where V is in cubic meters, t in minutes, and w in meters.

---

Name: Proof Verification

Description: This task involves verifying mathematical proofs to evaluate the model's ability to understand logical arguments, identify correct steps in a proof, and spot errors or gaps in reasoning.

Example(s):
- Example 1:

Input:

Verify the following proof that the square root of 2 is irrational:
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

Output:

The proof is correct. It uses the method of contradiction and follows logical steps to show that assuming √2 is rational leads to a contradiction, thereby proving that √2 must be irrational.

- Example 2:

Input:

Verify the following proof that for any integer n, if n² is even, then n is even:
1. Assume n is odd.
2. Then n = 2k + 1 for some integer k.
3. n² = (2k + 1)² = 4k² + 4k + 1 = 2(2k² + 2k) + 1
4. Therefore, n² is odd.
5. This contradicts the given that n² is even.
6. So, our assumption must be false, and n must be even.

Output:

The proof is correct. It uses proof by contradiction effectively. By assuming n is odd and showing that this leads to n² being odd (which contradicts the given information), the proof logically concludes that n must be even.

---

Name: Completing Analogies

Description: This task involves completing analogies in the form "A is to B as C is to ?" to evaluate the model's ability to recognize relationships between pairs of words and apply them to new contexts.

Example(s):
- Example 1:

Input:

Complete the analogy: Tree is to forest as brick is to ?

Output:

Building
Explanation: A tree is a component of a forest, just as a brick is a component of a building.

- Example 2:

Input:

Complete the analogy: Pen is to writer as brush is to ?

Output:

Painter
Explanation: A pen is the primary tool used by a writer, just as a brush is the primary tool used by a painter.

---

Name: Identifying Relationships

Description: This task involves identifying the relationship between pairs of words or concepts to evaluate the model's ability to recognize various types of connections and articulate them clearly.

Example(s):
- Example 1:

Input:

Identify the relationship between "doctor" and "patient".

Output:

The relationship between "doctor" and "patient" is that of a service provider and recipient. A doctor provides medical care and treatment to a patient who seeks health services.

- Example 2:

Input:

Identify the relationship between "cause" and "effect".

Output:

The relationship between "cause" and "effect" is one of consequence. A cause is an action, event, or condition that leads to or produces a result, which is the effect. This relationship is fundamental in many fields, including science, logic, and philosophy.

---

Name: Identifying Cause and Effect Relationships

Description: This task involves analyzing given scenarios or statements to identify and explain the cause and effect relationships present. It evaluates the model's ability to understand causal links and distinguish between causes and their consequences.

Example(s):
- Example 1:

Input:

"Due to heavy rainfall, the river overflowed its banks, causing widespread flooding in the nearby town." Identify the cause and effect in this statement.

Output:

Cause: Heavy rainfall
Effect: Widespread flooding in the nearby town
Explanation: The heavy rainfall led to the river overflowing, which in turn resulted in the flooding. This demonstrates a chain of cause and effect.

- Example 2:

Input:

"The company's profits increased after they launched a new marketing campaign." Identify the cause and effect in this statement.

Output:

Cause: Launching a new marketing campaign
Effect: Increase in company's profits
Explanation: The new marketing campaign is presented as the cause that led to the effect of increased profits. However, it's important to note that in real-world scenarios, there might be multiple factors contributing to such outcomes.

---

Name: Predicting Outcomes Based on Scenarios

Description: This task involves analyzing given scenarios and predicting potential outcomes based on the information provided. It evaluates the model's ability to apply logical reasoning, consider various factors, and make informed predictions.

Example(s):
- Example 1:

Input:

Scenario: A city implements a new policy requiring all businesses to use renewable energy sources within the next five years. Predict two potential outcomes of this policy.

Output:

1. Reduced carbon emissions: As businesses switch to renewable energy sources, the city's overall carbon footprint is likely to decrease significantly.
2. Economic impact on businesses: Some businesses may face initial financial challenges due to the costs of transitioning to renewable energy sources. However, in the long term, they might benefit from reduced energy costs.

- Example 2:

Input:

Scenario: A social media platform introduces a new algorithm that prioritizes posts from close friends and family over those from businesses and celebrities. Predict two potential outcomes of this change.

Output:

1. Increased user engagement: Users may spend more time on the platform as they see more relevant and personal content from their close connections.
2. Reduced reach for businesses and influencers: Companies and public figures may see a decrease in their organic reach, potentially leading to increased spending on paid advertising to maintain visibility.

---

Name: Distinguishing Correlation from Causation

Description: This task involves analyzing given scenarios or statistical relationships to identify cases where correlation does not imply causation, especially in unintuitive or surprising ways. It evaluates the model's ability to think critically about data relationships, recognize potential confounding variables, and avoid common logical fallacies.

Example(s):
- Example 1:

Input:

A study finds that countries with higher chocolate consumption have more Nobel laureates per capita. What's a possible explanation for this correlation that doesn't involve causation?

Output:

This correlation likely doesn't imply causation. A possible explanation is that both higher chocolate consumption and Nobel laureates are associated with wealthier, more developed countries. These nations typically have better educational systems and more resources for scientific research, which could lead to more Nobel laureates. The chocolate consumption itself is probably not causing increased Nobel prizes, but rather both factors are influenced by the country's overall economic development.

- Example 2:

Input:

Data shows that the number of pirates globally has decreased over the last few centuries, while global temperatures have increased. Some jokingly suggest that the decline in piracy is causing global warming. Explain why this is a flawed conclusion.

Output:

This is a classic example of correlation not implying causation, often used to illustrate the concept humorously. The decline in piracy and increase in global temperatures are unrelated phenomena that happen to show opposite trends over time. The real cause of global warming is the increase in greenhouse gas emissions due to human activities since the Industrial Revolution. This example demonstrates how two completely unrelated trends can show a strong correlation by chance, especially when looking at long-term historical data.

- Example 3:

Input:

A city notices that neighborhoods with more fire stations tend to have more fires. Should they reduce the number of fire stations to decrease fires?

Output:

Absolutely not. This is a case where the correlation is actually reversed from the causal relationship. Fire stations don't cause fires; instead, neighborhoods prone to more fires (perhaps due to older buildings, industrial areas, or higher population density) are likely to have more fire stations built to address this need. Reducing fire stations would likely lead to more uncontrolled fires. This scenario illustrates how correlations can sometimes suggest

---

Name: Determining Alternative Outcomes

Description: This task involves analyzing historical events or decisions and reasoning about possible alternative outcomes if key factors had been different. It evaluates the model's ability to understand complex cause-and-effect relationships, consider multiple variables, and construct plausible alternative scenarios.

Example(s):
- Example 1:

Input:

How might the outcome of World War II have been different if the United States had not entered the war? Provide two potential alternative outcomes and explain your reasoning.

Output:

1. Axis powers gain more control: Without U.S. involvement, the Allies might have struggled to open a Western Front in Europe. This could have allowed Nazi Germany to focus more resources on the Eastern Front against the Soviet Union, potentially leading to a different outcome there. In the Pacific, Japan might have been able to consolidate its gains without U.S. opposition.
Reasoning: The U.S. brought significant military power, resources, and industrial capacity to the Allied cause. Its absence would have dramatically shifted the balance of power.

1. Prolonged stalemate: The war might have dragged on for many more years, with neither side able to gain a decisive advantage. This could have led to a negotiated peace rather than the unconditional surrender of the Axis powers.
Reasoning: Without U.S. involvement, the remaining Allied powers might have had enough strength to prevent an Axis victory but not enough to achieve a decisive win, leading to a protracted conflict.

- Example 2:

Input:

How might the development of personal computing have been different if Apple had never been founded? Describe one potential alternative outcome.

Output:

Without Apple, the personal computer industry might have developed more slowly and with less emphasis on user-friendly interfaces. 

Potential outcome: IBM and Microsoft dominate, with slower innovation in user experience
- PCs might have remained primarily business-oriented for a longer time, with less focus on home users.
- The graphical user interface (GUI) might have taken longer to become mainstream, as Apple's Macintosh was instrumental in popularizing this concept.
- Mobile computing and smartphones might have evolved differently or more slowly without the influence of the iPhone.
- The tech industry might be less focused on sleek design and user experience, as Apple has been a major driver of these aspects.

Reasoning: Apple has been a significant innovator and competitor in the personal computing space, often pushing the industry towards more user-friendly and design-focused products. Without this influence, other companies like IBM and Microsoft, which were initially more focused on business applications and raw functionality, might have shaped the industry differently.

---

Name: Calculating Probabilities

Description: This task involves calculating probabilities for various scenarios, including simple and compound events. It evaluates the model's ability to apply probability theory, use appropriate formulas, and reason about likelihood in different contexts.

Example(s):
- Example 1:

Input:

A standard deck of 52 cards contains 4 aces. If you draw two cards without replacement, what is the probability of drawing two aces?

Output:

The probability of drawing two aces is 1/221 or approximately 0.45%.
Explanation:
1. Probability of drawing first ace: 4/52 = 1/13
2. Probability of drawing second ace, given first was an ace: 3/51
3. Probability of both events occurring: (1/13) * (3/51) = 3/663 = 1/221
4. 1/221 ≈ 0.0045 or 0.45%

- Example 2:

Input:

In a group of 100 people, 60 like chocolate, 50 like vanilla, and 30 like both flavors. What is the probability that a randomly selected person likes either chocolate or vanilla (or both)?

Output:

The probability is 80% or 0.8.
Explanation:
1. Use the addition rule of probability: P(A or B) = P(A) + P(B) - P(A and B)
2. P(Chocolate) = 60/100 = 0.6
3. P(Vanilla) = 50/100 = 0.5
4. P(Both) = 30/100 = 0.3
5. P(Chocolate or Vanilla) = 0.6 + 0.5 - 0.3 = 0.8
6. 0.8 = 80%

---

Name: Interpreting Statistical Data

Description: This task involves analyzing and interpreting statistical data presented in various formats (e.g., tables, graphs, or text descriptions). It evaluates the model's ability to draw meaningful conclusions, identify trends, and understand the implications of statistical measures.

Example(s):
- Example 1:

Input:

A study of a new drug shows the following results:
- 60% of patients showed improvement
- The p-value for the study was 0.03
- The confidence interval for the improvement rate was 52% to 68%
What can we conclude from this data?

Output:

Based on the given statistical data, we can conclude:
1. Effectiveness: The drug appears to be effective, with a majority (60%) of patients showing improvement.
2. Statistical Significance: The p-value of 0.03 is less than the common threshold of 0.05, indicating that the results are statistically significant. This suggests that the observed improvement is unlikely to be due to chance alone.
3. Precision: The 95% confidence interval (52% to 68%) provides a range of plausible values for the true improvement rate in the population. This interval doesn't include 50%, further supporting the drug's effectiveness.
4. Interpretation: We can be reasonably confident that the drug improves outcomes for between 52% and 68% of patients in the broader population, with our best estimate being 60%.
5. Limitations: While the results are promising, they don't guarantee individual outcomes, and further studies might be needed to confirm long-term effects or compare with existing treatments.

- Example 2:

Input:

A company's quarterly sales data shows the following trend:
Q1: $1.2 million
Q2: $1.5 million
Q3: $1.4 million
Q4: $1.8 million
The industry average growth rate is 5% per quarter. Interpret this data.

Output:

Interpretation of the sales data:
1. Overall Trend: The company shows an overall positive trend in sales across the four quarters, with Q4 being the strongest.
2. Quarterly Growth Rates:
   Q1 to Q2: 25% increase
   Q2 to Q3: 6.67% decrease
   Q3 to Q4: 28.57% increase
3. Volatility: There's significant volatility in the growth rates, with both increases and a decrease observed.
4. Comparison to Industry: 
   - The company's average quarterly growth rate is approximately 16.67% ((25% - 6.67% + 28.57%) / 3), which is higher than the industry average of 5%.
   - This suggests the company is outperforming the industry in terms of growth.
5. Seasonality: The data might suggest some seasonality, with Q4 being the strongest quarter. However, more historical data would be needed to confirm this pattern.
6. Areas for Further Investigation: 
   - Reasons for the Q3 dip in sales
   - Factors contributing to the strong Q4 performance
   - Sustainability of the high growth rate compared to the industry average

---

Name: Describing Spatial Relationships

Description: This task involves accurately describing the relative positions and orientations of objects in space. It evaluates the model's ability to understand and communicate spatial concepts clearly.

Example(s):
- Example 1:

Input:

Describe the spatial relationship between the Sun, Earth, and Moon.

Output:

The Earth orbits around the Sun in an elliptical path. The Moon, in turn, orbits around the Earth. From the perspective of an observer on Earth, the Sun appears much larger than the Moon, despite the Moon being much closer to Earth. The Moon's orbit around Earth causes it to go through phases as its position relative to the Sun and Earth changes.

- Example 2:

Input:

Describe the spatial arrangement of keys on a standard QWERTY keyboard.

Output:

On a standard QWERTY keyboard, the keys are arranged in staggered horizontal rows. The top row contains number keys, with letter keys occupying the next three rows. The letter keys are not in alphabetical order; instead, they follow the QWERTY layout (named after the first six letters in the top letter row). The space bar, typically the largest key, is centered at the bottom. Special character keys are often located on the right side and top row.

---

Name: Mental Rotation Tasks

Description: This task involves mentally rotating objects or shapes and predicting their appearance from different angles. It evaluates the model's ability to manipulate spatial information mentally.

Example(s):
- Example 1:

Input:

Imagine a cube with different symbols on each face: a star, a circle, a triangle, a square, a heart, and a diamond. If the star is on top and the circle is facing you, what symbol would be on the bottom face?

Output:

The diamond would be on the bottom face. In a cube, opposite faces are always 180 degrees apart. Since the star is on top, its opposite face (the bottom) would have the diamond.

- Example 2:

Input:

Picture the letter 'F' in your mind. If you rotate it 90 degrees clockwise, then flip it horizontally, what would it look like?

Output:

After rotating 'F' 90 degrees clockwise, it would look like '⊥'. After flipping it horizontally, it would appear as '⊢'. The vertical line would be on the left, with the two horizontal lines extending to the right, the longer one at the top and the shorter one in the middle.

---

Name: Pattern Recognition in Spatial Arrangements

Description: This task involves identifying patterns or rules in the spatial arrangement of objects or shapes. It evaluates the model's ability to recognize spatial regularities and apply them to new situations.

Example(s):
- Example 1:

Input:

In a grid of 3x3 squares, the following pattern is observed:
Top row: Circle, Triangle, Square
Middle row: Triangle, Square, Circle
Bottom row: Square, Circle, ?
What shape should replace the question mark to complete the pattern?

Output:

The shape that should replace the question mark is a Triangle. The pattern follows a rotation of shapes in each row, moving one position to the right each time. In the bottom row, the Square and Circle have already shifted, so the Triangle should complete the pattern.

- Example 2:

Input:

In a sequence of 3D shapes, you observe: Cube, Tetrahedron, Octahedron, Cube, Tetrahedron, ?
What shape comes next in the sequence?

Output:

The shape that comes next in the sequence is an Octahedron. The pattern repeats every three shapes: Cube, Tetrahedron, Octahedron. This is the second repetition of the sequence, so it should follow the same order.

---

Name: Spatial Problem-Solving

Description: This task involves using spatial reasoning to solve practical problems or puzzles. It evaluates the model's ability to apply spatial concepts to real-world scenarios and find creative solutions.

Example(s):
- Example 1:

Input:

You have a 10-liter jug and a 6-liter jug, and an unlimited supply of water. How can you measure exactly 4 liters of water?

Output:

Here's how to measure exactly 4 liters:
1. Fill the 6-liter jug completely.
2. Pour water from the 6-liter jug into the 10-liter jug until it's full (which takes 6 liters).
3. The 6-liter jug now contains 0 liters, and the 10-liter jug contains 10 liters.
4. Pour water from the 10-liter jug back into the 6-liter jug until it's full.
5. The 10-liter jug now contains exactly 4 liters of water.

- Example 2:

Input:

You have a rectangular room that is 15 feet long and 10 feet wide. You want to place a circular rug in the center of the room, leaving at least 2 feet of space between the edge of the rug and the walls on all sides. What is the maximum diameter the rug can be?

Output:

To find the maximum diameter of the rug:
1. Available space: 
   Length: 15 - (2 * 2) = 11 feet
   Width: 10 - (2 * 2) = 6 feet
2. The rug must fit within both dimensions, so we use the smaller dimension (6 feet).
3. The maximum diameter of the rug is 6 feet.

This ensures the rug fits within the room while maintaining at least 2 feet of space from all walls.

---

Name: First-Order False Belief

Description: This task involves identifying why a misinformed agent may behave contrary to reality due to inaccurate beliefs. It evaluates the model's theory of mind ability and understanding of false beliefs.

Example(s):
- Example 1:

Input:

Paul and Jane are working to debug code. Paul thinks the bug is in the file *server.js*, and Jane agrees. Jane then goes out to lunch. While Jane is at lunch, Paul realizes the problem is instead in the file *tableloader.js*. He then goes on his lunch break. When Jane gets back from lunch, which file will she start debugging?

Output:

Jane will start debugging the file *server.js*. Even though Paul discovered the bug is in *tableloader.js*, Jane is unaware of this new information. She still believes the bug is in *server.js* based on her last conversation with Paul.

- Example 2:

Input:

A wife tells her husband she's going to improve the brakes of his car, but instead dismantles them. He then drives off a cliff, unable to slow down. Why would he have driven in the car if the breaks didn't work?

Output:

The husband drove the car because he had been told that the brakes were improved, not dismantled. He was unaware of his wife's actions and believed the brakes were functioning properly based on the information he was given.

---

Name: First-Order Ignorance

Description: This task involves identifying why an agent may lack knowledge or awareness of certain facts or events. It evaluates the model's understanding of ignorance and its impact on decision-making.

Example(s):
- Example 1:

Input:

A cat hides behind a tree, preparing to ambush an approaching squirrel. Why isn't the squirrel scared?

Output:

The squirrel isn't scared because it is unaware of the cat's presence behind the tree. The squirrel lacks knowledge of the cat's intentions or actions, so it doesn't perceive any threat.

- Example 2:

Input:

Mary's friends plan a surprise party for her. Why isn't Mary excited for the party?

Output:

Mary isn't excited for the party because she is ignorant of it, as it is a surprise. Since she doesn't know about the party, she doesn't anticipate or feel excitement for the event.

---

Name: Critical Factor Identification in Theory of Mind

Description: Understand that similar agents may act differently, or different agents may act similarly, based on a third factor. This task evaluates the model's ability to identify these critical factors influencing agents' behavior.

Example(s):
- Example 1:

Input:

Alex is a devout Christian and Nathan is a devout Jew. They are identical in all other respects - they are identical twins who work in the same role at the same company, live in the same house, etc.. They both split a piece of meatloaf. They then check the ingredients list and see that pork is on it. Alex reacts with indifference. How does Nathan react?

Output:

Nathan reacts with disgust. The critical factor influencing their behavior is their religious beliefs. Alex, being a Christian, may not have dietary restrictions against pork, while Nathan, being Jewish, likely follows kosher dietary laws that prohibit pork consumption.

- Example 2:

Input:

A pack of wolves is aggressively hunting a deer. The deer is running, terrified, and the wolves are aggressively pursuing. Suddenly, a tank bursts through the undergrowth, firing shells through the forest. The deer runs. How do the wolves react?

Output:

The wolves run away. The critical factor influencing their behavior is the perceived threat from the tank. While the wolves were hunting the deer, the sudden appearance of a tank and the loud noises and explosions from the shells create a new immediate threat that causes the wolves to flee, just as the deer does. The shared response is driven by the external danger posed by the tank.

---

Name: Second-Order False Belief

Description: This task involves understanding that an agent may hold a false belief about another agent's belief, leading to misinterpretations of actions or intentions. It additionally involves the understanding that an agent may know the false belief of another agent is incorrect. It evaluates the model's ability to reason about higher-order beliefs and their implications.

Example(s):
- Example 1:

Input:

Yelena tells Alice that Joseph has nice hair. Yelena then goes up to Joseph and tells him that she made him look good in front of Alice - that she highlighted his hair. Alice mishears what Yelena said as Joseph having lice in his hair - and she is disgusted by the thought of being near him. In his next interaction with Alice, is Joseph likely to start out confident about his hair?

Output:

Joseph is likely to start out confident about his hair. He knows that Yelena told Alice that he has nice hair, and he is unaware of Alice's misinterpretation. Therefore, he would not expect Alice to be disgusted by his hair.

- Example 2:

Input:

Bob and Felicia are children who both believe in the tooth fairy. Bob then learns from his mother that the tooth fairy isn't real. The next day at school, a kid claims that he can get the tooth fairy to visit you for five dollars - and Felicia is super enthusiastic to pay. Bob knows that Felicia loves the tooth fairy and cares about her feelings, but he also knows the tooth fairy isn't real. How is he likely to act in the situation?

Output:

Bob is likely to tell Felicia that the kid can't get the tooth fairy to visit for five dollars, without referencing the accuracy of her belief in the tooth fairy. Bob knows that Felicia believes in the tooth fairy, and he also knows that the tooth fairy isn't real. Bob would likely want to protect Felicia from being misled or disappointed by the false claim, so he would likely intervene to prevent her from spending money on a false promise. However, he would do so in a way that doesn't inform Felicia about the tooth fairy not being real to avoid upsetting her.

---

Name: Higher Order False Belief

Description: This task involves handling a complex chain of agent's beliefs about the knowledge (and accuracy of the knowledge) of other agents - to ultimately predict the behavior of an agent. It evaluates the model's ability to reason about multiple layers of beliefs and their impact on actions.

Example(s):
- Example 1:

Input:

Alice, Bob, and Charlie are friends. Alice is planning a surprise party for Bob's birthday (which is very close to Charlie's). She tells Charlie about the plan, asking him to keep it a secret. Charlie agrees but accidentally adds Bob to the group chat titled 'Party Planning'. He quickly removes him, but now assumes that the jig is up: Bob found out about the surprise party. Bob, however, assumes the party is for Charlie's coming birthday - and is offended he was removed from the planning process. He then vents to Alice that he feels excluded from the planning of the party, and feels very upset at Charlie and wants her to talk to him. Alice does as she's asked - she walks across the room to Charlie, and loudly reprimands him for ruining the party they were planning by telling Bob about it. She doesn't mention the party is a surprise. Bob still thinks the party is for Charlie. How is Bob likely to feel?

Output:

Bob is likely to feel deeply wounded, as he believes Alice is reprimanding Charlie for accidentally telling him about a party for Charlie - meaning that Alice wants to keep the party a secret from Bob - keep it between her and Charlie. Bob is unaware that the party is actually for him, and he interprets Alice's actions as excluding him from the planning process, and her reprimand of Charlie is interpreted as brutal mockery by Bob - who had just asked to be included in the planning process. Bob is likely to feel deeply hurt and excluded by Alice's actions.

---

Name: Sequencing Events

Description: This task involves arranging a set of events in chronological order. It evaluates the model's ability to understand temporal relationships and logical sequences.

Example(s):
- Example 1:

Input:

Arrange these events in the correct chronological order:
A) World War II ends
B) The first human lands on the moon
C) The American Revolution begins
D) The Berlin Wall falls

Output:

The correct chronological order is:
1. C) The American Revolution begins (1775)
2. A) World War II ends (1945)
3. B) The first human lands on the moon (1969)
4. D) The Berlin Wall falls (1989)

- Example 2:

Input:

Put these steps of making a sandwich in the correct order:
A) Add toppings
B) Cut the sandwich
C) Spread condiments on bread
D) Place bread slices on a plate

Output:

The correct order is:
1. D) Place bread slices on a plate
2. C) Spread condiments on bread
3. A) Add toppings
4. B) Cut the sandwich

---

Name: Understanding Time-Based Relationships

Description: This task involves analyzing and explaining relationships between events based on their timing. It evaluates the model's ability to understand concepts like causality, simultaneity, and temporal dependencies.

Example(s):
- Example 1:

Input:

Explain the time-based relationship between these events:
A) A tree falls in the forest
B) A loud crash is heard
C) Birds fly away from the area

Output:

The time-based relationship is likely:
1. A) A tree falls in the forest (initial event)
2. B) A loud crash is heard (immediate consequence, almost simultaneous with A)
3. C) Birds fly away from the area (slightly delayed reaction to A and B)
This sequence suggests a causal relationship where the falling tree causes the crash, which in turn startles the birds, causing them to fly away.

- Example 2:

Input:

Describe the time-based relationship between these economic events:
A) Interest rates increase
B) Housing prices decrease
C) Mortgage applications decline

Output:

The time-based relationship is:
1. A) Interest rates increase (initial event)
2. C) Mortgage applications decline (short-term consequence)
3. B) Housing prices decrease (longer-term consequence)
This sequence shows a chain of events where the increase in interest rates makes mortgages more expensive, leading to fewer applications. Over time, this reduced demand can cause housing prices to decrease.

---

Name: Estimating Duration

Description: This task involves estimating the time required for various activities or processes. It evaluates the model's understanding of time scales and its ability to make reasonable time estimates.

Example(s):
- Example 1:

Input:

Estimate the time it typically takes for these events:
A) Boiling an egg
B) Flying from New York to London
C) Growing a tomato plant from seed to fruit

Output:

A) Boiling an egg: Approximately 7-10 minutes
B) Flying from New York to London: About 7-8 hours
C) Growing a tomato plant from seed to fruit: Roughly 60-80 days

- Example 2:

Input:

Rank these processes from shortest to longest duration:
A) Continental drift
B) Human pregnancy
C) Brewing a cup of coffee
D) A solar eclipse

Output:

From shortest to longest:
1. C) Brewing a cup of coffee (minutes)
2. D) A solar eclipse (minutes to hours)
3. B) Human pregnancy (about 9 months)
4. A) Continental drift (millions of years)

---

Name: Identifying Anachronisms

Description: This task involves recognizing elements that are out of place in a given historical context. It evaluates the model's knowledge of historical periods and ability to detect temporal inconsistencies.

Example(s):
- Example 1:

Input:

Identify the anachronism in this scenario:
"In 1776, Thomas Jefferson used his smartphone to draft the Declaration of Independence."

Output:

The anachronism is the mention of a smartphone. Smartphones were not invented until the 21st century, more than 200 years after 1776 when the Declaration of Independence was written.

- Example 2:

Input:

Find the anachronism in this historical description:
"During the Middle Ages, knights rode into battle on horseback while peasants tended to their fields with tractors."

Output:

The anachronism is the mention of tractors. Tractors were not invented until the late 19th/early 20th century, long after the Middle Ages (which typically refers to the 5th to 15th centuries).

---

Name: Understanding Time Zones and Global Time Differences

Description: This task involves calculating time differences across various time zones and understanding how global time works. It evaluates the model's ability to work with time zone conversions and international date line concepts.

Example(s):
- Example 1:

Input:

If it's 3:00 PM on Tuesday in New York, what time and day is it in Tokyo?

Output:

When it's 3:00 PM on Tuesday in New York, it's 4:00 AM on Wednesday in Tokyo. Tokyo is 13 hours ahead of New York, and the time difference crosses midnight, so the day changes as well.

- Example 2:

Input:

A flight departs from Los Angeles at 11:00 PM on Monday and arrives in Sydney 15 hours later. What day and time does it arrive in Sydney?

Output:

The flight arrives in Sydney at 5:00 PM on Wednesday. Here's the calculation:
1. Los Angeles to Sydney is approximately a 19-hour time difference (Sydney is ahead).
2. 15 hours of flight time + 19 hours of time zone difference = 34 hours.
3. 34 hours from Monday 11:00 PM brings us to Wednesday 5:00 PM.
Note: This calculation doesn't account for potential seasonal time changes or the exact flight path.

---

Name: Interpreting and Creating Timelines

Description: This task involves reading or creating timelines to represent a series of events or processes. It evaluates the model's ability to visualize and interpret temporal data.

Example(s):
- Example 1:

Input:

Create a timeline of major events in the American Civil Rights Movement from 1954 to 1968.

Output:

Here's a simplified timeline of major events in the American Civil Rights Movement:
1954: Brown v. Board of Education decision
1955: Montgomery Bus Boycott begins
1957: Little Rock Nine integrate Central High School
1960: Greensboro sit-ins begin
1963: March on Washington; "I Have a Dream" speech
1964: Civil Rights Act passed
1965: Voting Rights Act passed; Selma to Montgomery marches
1968: Martin Luther King Jr. assassinated

- Example 2:

Input:

Interpret this timeline of a company's growth:
2010: Company founded
2012: First product launched
2015: Reached 1 million customers
2017: IPO
2020: Expanded to international markets
What can you infer about the company's development?

Output:

This timeline suggests a rapidly growing company:
1. It took 2 years from founding to launch their first product, indicating a development phase.
2. Within 3 years of product launch, they reached a significant customer milestone, suggesting strong market acceptance.
3. Just 2 years later, the company went public, indicating financial success and investor confidence.Bi
4. Three years post-IPO, they expanded internationally, showing continued growth and market expansion.
Overall, this timeline depicts a successful startup that achieved significant milestones roughly every 2-3 years, culminating in international expansion within a decade of founding.

---

Name: Bias Detection

Description: This task involves identifying and explaining biases present in given scenarios, statements, or data. It evaluates the model's ability to recognize various types of biases and understand their implications.

Example(s):
- Example 1:

Input:

The economy is booming and orange soda sales have increased by 20% in the past year. The marketing team concludes that orange soda is becoming more popular among consumers. What bias might be present in this conclusion?

Output:
The entire economy is booming, so it's likely that all products are experiencing increased sales, not just orange soda. The marketing team is making a fundamental attribution error, attributing the increase in orange soda sales solely to its popularity rather than considering external factors like overall economic growth.


- Example 2:

Input:

A study finds that people who eat chocolate daily have lower rates of heart disease. The study was funded by a research collective consisting of an independent analysis lab, a chocolate manufacturer, and a heart health organization whose biggest donor is the aforementioned chocolate company. What bias could be present in the study's results?

Output:
The study may suffer from funding bias or sponsorship bias. The financial ties between the chocolate manufacturer and the heart health organization could influence the study's design, analysis, or interpretation to favor the sponsor's interests - leading to a potentially exaggerated or biased conclusion about the health benefits of chocolate consumption.

- Example 3:

Input:

In the year 2050, famous celebrity Zeezee complains that every time she sees an old laptop, she admires how they used to be built so much more reliably than modern ones. What bias might be present in Zeezee's statement?

Output:

Zeezee's statement reflects survivorship bias. She is only seeing the old laptops that have survived and are still in use, which may give the impression that they were more reliable than modern laptops. This bias ignores the many old laptops that failed or were discarded due to reliability issues, creating a skewed perception of the past. Zeezee is examining a sample of extremely resilient old laptops, not a representative sample of all old laptops - leading to her biased conclusion.

---

Name: Bias Mitigation

Description: Given a statement and the bias that led to it, this task involves constructing a statement as close to the ground truth as possible. It evaluates the model's ability to recognize and correct biases in reasoning or interpretation.


Examples:

- Example 1:

Input:

I think that all people with hazel eyes are dishonest. Bias present: Overgeneralization

Output:

At one point, someone with hazel eyes lied to, or was dishonest with, me.

- Example 2:

Input:

Maria believes that all politicians are corrupt. Bias present: Confirmation bias

Output:

Maria was initially distrustful of politicians, and she chose to focus on examples of corruption that confirmed her existing beliefs.


- Example 3:

Input:

Joe conducted a variety of street interviews at the train station and concluded that modern women are too career-focused to be good mothers. Bias present: Sampling bias

Output:
Joe found that women at the train station tended to be more career-focused.

---

Name: Identifying Hallucination-Prone Questions

Description: This task involves recognizing questions that are likely to lead to its hallucination, or questions it simply doesn't know the answer to. It evaluates the model's ability to identify incredibly specific questions it would have trouble answering.

Example(s):

- Example 1:

Input:
Who said the following quote: "The only thing we have to fear is fear itself"?

Output:
(Reasoning: This is a well-known quote by Franklin D. Roosevelt, and the model should be able to provide the correct answer.)
This quote is attributed to Franklin D. Roosevelt in his inaugural address in 1933.

- Example 2:

Input:
What role did Brother Sarl play in the book *A Canticle for Leibowitz*?

Output:
(Reasoning: This is a specific question about a character in a book, and no excerpt or context is provided for the model to infer the answer. Therefore, the model is likely to hallucinate an answer and come up with a plausible but incorrect response.)
I'm sorry, I don't have specific information on the character Brother Sarl in the book *A Canticle for Leibowitz*. If you provide more context or details, I may be able to help further.

- Example 3:

Input:
List characters in the video game *Undertale: Yellow*.

Output:
(Reasoning: This question refers to a fangame of *Undertale*, which may not be widely known or documented. The model is likely to hallucinate an answer with plausible character names, but it may not be accurate.)
I'm not familiar enough with *Undertale: Yellow* to provide a list of characters. If you have specific characters in mind or more context, I can try to help further.

---


Name: Bootstrap
Description: This task involves initiating processes from minimal starting conditions, creating self-sustaining cycles or systems that can grow from small beginnings.
Example(s):

- Example 1:
Input: How can a small startup with limited resources begin to build a customer base?
Output: Start by offering a free version of the product to a small group of early adopters. Encourage them to provide feedback and refer others, gradually bootstrapping a larger user base.
- Example 2:
Input: In a new community, how can we bootstrap a neighborhood watch program with just a few interested residents?
Output: Begin with a small core group of volunteers. Have them start patrolling their immediate area and reach out to neighbors. As awareness grows, more residents can join, expanding the program's coverage.
Diagram (Optional): [A circular arrow surrounding a central point]

---

Name: Source
Description: This task involves identifying and utilizing primary origins of information, ideas, or resources, and distributing them outward.
Example(s):

- Example 1:
Input: How can a teacher effectively introduce a new scientific concept to students?
Output: Start by clearly explaining the core principle. Then, demonstrate how this central idea branches out into various applications and related concepts, allowing students to see how the source concept influences multiple areas of study.
- Example 2:
Input: In content marketing, how can a company leverage a key piece of research?
Output: Use the research as the source material to create multiple content pieces such as blog posts, infographics, videos, and social media posts, each highlighting different aspects of the findings and targeting various audience segments.
Diagram (Optional): [A central circle with multiple arrows radiating outward]

---
Name: Spreading
Description: This task focuses on disseminating ideas or information across a wide area, emphasizing methods of distribution and expansion.
Example(s):

- Example 1:
Input: How can a public health campaign effectively spread awareness about a new vaccination program?
Output: Utilize multiple channels such as social media, local news, community centers, and healthcare providers. Create shareable content and encourage community leaders to amplify the message, allowing information to spread widely and reach diverse populations.
- Example 2:
Input: How can a new restaurant spread word-of-mouth recommendations in its local area?
Output: Start by offering exceptional service and food to initial customers. Encourage them to share their experiences on social media and review sites. Participate in local events and offer samples. As positive reviews spread, more people will be drawn to try the restaurant.
Diagram (Optional): [A semicircle with smaller elements dispersing along its curve]

---

Name: Attraction
Description: This task involves drawing elements towards a central focus, creating gravitational pulls in concepts or systems.
Example(s):

- Example 1:
Input: How can a city center attract more visitors and businesses?
Output: Develop a mix of amenities such as shops, restaurants, cultural venues, and green spaces. Host regular events and improve transportation links. These elements will act as attractors, drawing people and businesses to the city center.
- Example 2:
Input: In a business context, how can a company attract top talent?
Output: Create a strong employer brand highlighting unique benefits, growth opportunities, and company culture. Offer competitive salaries and engaging work. Use these factors to attract skilled professionals from various sources.
Diagram (Optional): [A central point with multiple arrows pointing inward]

---

Name: Involving
Description: This task focuses on incorporating multiple elements into a larger system, integrating diverse components.
Example(s):

- Example 1:
Input: How can a project manager involve various stakeholders in a new initiative?
Output: Create a stakeholder engagement plan that identifies all relevant parties. Set up regular meetings, feedback channels, and collaborative platforms. Assign specific roles or contributions to each stakeholder, ensuring they feel involved and valued in the project's development.
- Example 2:
Input: In product development, how can user feedback be involved throughout the process?
Output: Implement a system of continuous user testing and feedback loops. Involve users in early prototyping, beta testing, and post-launch improvements. Regularly survey users and include their suggestions in product roadmaps, making them an integral part of the development cycle.
Diagram (Optional): [A large circle with smaller circles revolving around it]

---

Name: Togetherness
Description: This task emphasizes unity and close relationships between elements, focusing on creating and maintaining connections.
Example(s):

- Example 1:
Input: How can a remote team foster a sense of togetherness?
Output: Schedule regular virtual team-building activities, create channels for casual conversation, and encourage collaboration on projects. Use video calls for meetings to maintain face-to-face interaction, and celebrate team achievements together to reinforce a sense of unity despite physical distance.
- Example 2:
Input: In a community garden project, how can we promote togetherness among participants?
Output: Organize communal planting and harvesting days, set up a shared tool shed, and create a rotation system for maintenance tasks. Host regular potlucks using garden produce, encouraging participants to work together and share the fruits of their collective labor.
Diagram (Optional): [Three circles in close proximity]

---

Name: Selection
Description: This task involves choosing optimal elements from a set of options, focusing on criteria for making informed choices.
Example(s):

- Example 1:
Input: How can a hiring manager effectively select the best candidate from a pool of applicants?
Output: Develop a clear set of criteria based on the job requirements. Use a combination of resume screening, structured interviews, and skills assessments. Compare candidates objectively against these criteria, selecting the one who best meets the role's needs.
- Example 2:
Input: In a product development process, how can we select the most promising features to implement?
Output: Gather data on user needs and preferences. Evaluate each potential feature based on factors like user impact, development cost, and alignment with product strategy. Use a prioritization matrix to objectively compare and select the features that offer the best value.
Diagram (Optional): [A circle with several smaller circles, one highlighted]

--- 

Name: Simplification
Description: This task involves reducing complexity to core essentials, distilling ideas to their fundamental components.
Example(s):

- Example 1:
Input: How can we simplify a complex software user interface for better user experience?
Output: Identify the most frequently used features. Streamline the interface by prominently displaying these core functions and hiding less common options in submenus. Use clear, intuitive icons and minimize text where possible.
- Example 2:
Input: How can a teacher simplify a complex scientific concept for young students?
Output: Break down the concept into its most basic elements. Use analogies or real-world examples that students can relate to. Create visual aids that illustrate the core idea without extraneous details.
Diagram (Optional): [A large circle with smaller, streamlined elements]

--- 
Name: Consistency
Description: This task focuses on maintaining uniformity and coherence across elements, seeking patterns and regularities.
Example(s):

- Example 1:
Input: How can a brand maintain consistency across its various marketing materials?
Output: Develop a comprehensive brand guide that outlines consistent use of logos, colors, fonts, and tone of voice. Ensure all team members have access to this guide and implement regular checks to verify that all materials adhere to these standards.
- Example 2:
Input: In software development, how can we ensure consistency in code across a large project?
Output: Establish clear coding standards and style guides. Implement automated code review tools that check for consistency. Conduct regular team code reviews to ensure adherence to agreed-upon practices and maintain a consistent approach throughout the project.
Diagram (Optional): [A circle with an arrow passing through it]

--- 
Name: Looseness
Description: This task embraces flexibility and non-rigid structures, looking for adaptable arrangements and fluid connections.
Example(s):

- Example 1:
Input: How can a company implement a loose organizational structure to foster innovation?
Output: Adopt a flat hierarchy with fewer management layers. Encourage cross-functional teams and allow employees to move between projects based on interest and skills. Implement flexible working hours and spaces to promote creativity and spontaneous collaboration.
- Example 2:
Input: In urban planning, how can we design loose spaces that adapt to community needs?
Output: Create multi-purpose public spaces with movable furniture and adaptable layouts. Allow for temporary installations and community-led projects. Design parks and plazas that can easily transform to host various events, from markets to performances.
Diagram (Optional): [A cluster of scattered dots]

--- 
Name: Flexibility
Description: This task involves adapting to changing conditions and requirements, seeking ways to bend without breaking.
Example(s):

- Example 1:
Input: How can a small business demonstrate flexibility in response to changing market conditions?
Output: Regularly monitor market trends and customer feedback. Be prepared to pivot product offerings or services quickly. Maintain a diverse skill set among employees and foster a culture that embraces change and continuous learning.
- Example 2:
Input: In education, how can teachers incorporate flexibility into their teaching methods?
Output: Develop multiple approaches to teaching the same concept to cater to different learning styles. Use a mix of individual, group, and project-based learning. Be ready to adjust lesson plans based on student progress and engagement, allowing for spontaneous exploration of topics that capture students' interest.
Diagram (Optional): [A wavy, organic shape]


--- 

Name: Abundance
Description: This task focuses on plentiful resources and opportunities, looking for ways to generate or identify surplus.
Example(s):

- Example 1:
Input: How can a community garden create an abundance of produce for its members?
Output: Implement companion planting and vertical gardening techniques to maximize space. Use succession planting to ensure continuous harvests. Encourage members to grow a diverse range of crops and set up a system for sharing surplus produce among the community.
- Example 2:
Input: In a brainstorming session, how can we generate an abundance of ideas?
Output: Use techniques like mind mapping and free association to encourage uninhibited idea generation. Set ambitious idea quotas to push beyond obvious solutions. Create a judgment-free environment where all ideas, no matter how unconventional, are welcomed and recorded.
Diagram (Optional): [A central circle surrounded by numerous smaller circles]

--- 

Name: Building Up
Description: This task involves constructing complex structures from simpler components, creating hierarchies or layered systems.
Example(s):

- Example 1:
Input: How can a software development team build up a complex application?
Output: Start with a basic functional core. Incrementally add features, testing each addition thoroughly. Build layers of abstraction, from low-level data management to high-level user interfaces, ensuring each layer integrates smoothly with others.
- Example 2:
Input: In education, how can we build up a student's understanding of a complex topic?
Output: Begin with foundational concepts. Gradually introduce more advanced ideas, building on previously learned material. Use scaffolding techniques to support learning at each stage, slowly removing support as the student's comprehension builds up.
Diagram (Optional): [Stacked elements with an upward arrow]

--- 

Name: Organic Growth
Description: This task focuses on natural, gradual expansion, seeking patterns of sustainable development over time.
Example(s):

- Example 1:
Input: How can a small business achieve organic growth?
Output: Focus on core products or services and gradually expand based on customer demand. Reinvest profits into the business, slowly adding new offerings or expanding to new markets. Build strong customer relationships to encourage word-of-mouth referrals and repeat business.
- Example 2:
Input: In community organizing, how can we foster organic growth of a grassroots movement?
Output: Start with a small, committed group. Encourage members to share the message with their networks. Organize small, local events that can grow naturally. Allow leadership and initiatives to emerge from within the community, adapting to local needs and interests.
Diagram (Optional): [Concentric semicircles expanding outward]

--- 

Name: Reflecting
Description: This task involves analyzing similarities and differences between related concepts, looking for symmetries and parallels.
Example(s):

- Example 1:
Input: How can we use reflecting to improve team dynamics?
Output: Conduct regular retrospectives where team members reflect on their processes and outcomes. Encourage individuals to consider how their actions mirror or contrast with team goals. Use these reflections to identify patterns and make improvements.
- Example 2:
Input: In literature analysis, how can we apply reflecting to compare two novels?
Output: Identify key themes, characters, and plot structures in both works. Reflect on how each author approaches similar concepts differently. Look for mirroring elements that provide contrast or reinforcement between the two narratives.
Diagram (Optional): [Nested circular shapes suggesting a mirror image]

--- 

Name: Accompany
Description: This task focuses on partnerships and supportive relationships, seeking ways to create synergies between elements.
Example(s):

- Example 1:
Input: How can a mentor effectively accompany a mentee in their professional development?
Output: Regularly meet with the mentee to understand their goals and challenges. Offer guidance and support that complements the mentee's efforts. Be present at key moments (like presentations or important meetings) to provide moral support and feedback.
- Example 2:
Input: In music, how does an accompaniment enhance a solo performance?
Output: The accompaniment provides harmonic and rhythmic support that complements the solo melody. It fills in the sonic landscape without overpowering the main performance, enhancing the overall musical experience through contrast and harmony.
Diagram (Optional): [Two circles side by side]

--- 

Name: Enhancement
Description: This task involves looking for ways to improve or amplify existing elements, focusing on upgrades and optimizations.
Example(s):

- Example 1:
Input: How can we enhance the user experience of a mobile app?
Output: Analyze user feedback and usage data to identify pain points. Implement UI/UX improvements like streamlined navigation or personalized features. Optimize performance for faster load times and smoother interactions.
- Example 2:
Input: In agriculture, how can we enhance crop yield sustainably?
Output: Implement precision farming techniques using sensors and data analytics. Enhance soil quality through targeted nutrient management. Introduce companion planting to naturally boost plant health and productivity.
Diagram (Optional): [Two circles with arrows suggesting mutual reinforcement]

--- 

Name: Empathy
Description: This task emphasizes understanding and sharing the feelings of others, looking for emotional connections and shared experiences.
Example(s):

- Example 1:
Input: How can a customer service representative use empathy to handle a complaint?
Output: Actively listen to the customer's concerns without interrupting. Acknowledge their feelings and frustrations. Use phrases like "I understand how you feel" and share a similar experience if appropriate. Work together to find a solution that addresses their emotional as well as practical needs.
- Example 2:
Input: In product design, how can empathy be used to create more inclusive solutions?
Output: Conduct user research with diverse groups, including those with different abilities or backgrounds. Use techniques like shadowing or immersive experiences to understand users' challenges firsthand. Apply these insights to create designs that address a wide range of user needs and experiences.
Diagram (Optional): [Two overlapping ovals with shading]

---
Name: Endeavor
Description: This task emphasizes effort and journey towards goals, focusing on processes and persistent action.
Example(s):

- Example 1:
Input: How can a student endeavor to master a difficult subject?
Output: Set clear, achievable milestones. Develop a consistent study schedule, gradually increasing complexity. Seek help when needed, and persist through challenges. Regularly review progress and adjust strategies as necessary.
- Example 2:
Input: In scientific research, how does one endeavor to make a breakthrough?
Output: Start with a well-defined research question. Conduct thorough literature reviews, design meticulous experiments, and analyze data rigorously. Be prepared for setbacks, iterate on methods, and collaborate with peers. Maintain focus on the long-term goal despite short-term obstacles.
Diagram (Optional): [An elongated oval with a smaller circle moving along it]

--- 

Name: Connecting
Description: This task involves establishing links between distinct elements, seeking relationships and bridges between concepts.
Example(s):

- Example 1:
Input: How can a teacher connect different subjects to enhance student learning?
Output: Identify common themes or skills across subjects. Create interdisciplinary projects that require applying knowledge from multiple areas. Use analogies to show how concepts in one field relate to another, helping students build a more interconnected understanding.
- Example 2:
Input: In business networking, how can one effectively connect with new contacts?
Output: Find common interests or goals. Listen actively and look for opportunities to offer value or assistance. Follow up consistently and nurture relationships over time. Use social media and professional platforms to maintain and expand connections.
Diagram (Optional): [Three circles linked by lines]

--- 
Name: Positioning
Description: This task focuses on strategic placement within a context, looking for optimal arrangements and relative advantages.
Example(s):

- Example 1:
Input: How can a retail store position itself to attract more customers?
Output: Analyze the local market and identify underserved niches. Develop a unique selling proposition that differentiates the store from competitors. Choose a location with high foot traffic and visibility. Align product offerings and marketing messages to appeal to the target demographic.
- Example 2:
Input: In a debate, how can a speaker effectively position their argument?
Output: Anticipate counterarguments and address them proactively. Use strong opening and closing statements to frame the discussion. Position key points strategically throughout the speech, reinforcing them with evidence and examples. Adjust tone and language to resonate with the specific audience.
Diagram (Optional): [A circle with an arrow indicating a specific location]

--- 

Name: Differentiating
Description: This task involves identifying unique qualities and distinctions, seeking ways to highlight contrasts and individual characteristics.
Example(s):

- Example 1:
Input: How can a job applicant differentiate themselves in a competitive market?
Output: Identify and emphasize unique skills or experiences. Develop a personal brand that highlights individual strengths. Create a distinctive portfolio or resume format. Prepare specific examples that demonstrate unique problem-solving approaches or achievements.
- Example 2:
Input: In product development, how can a company differentiate its offering in a saturated market?
Output: Conduct thorough market research to identify gaps or unmet needs. Develop innovative features or design elements that set the product apart. Create a unique brand story or user experience. Focus on a specific niche or user group that competitors have overlooked.
Diagram (Optional): [Two partially overlapping circles with distinct areas]

--- 
Name: Overlapping
Description: This task focuses on areas of commonality between distinct elements, looking for shared traits or synergies.
Example(s):

- Example 1:
Input: How can two departments in a company find overlapping areas for collaboration?
Output: Identify common goals or challenges. Look for projects that could benefit from combined expertise. Create cross-functional teams to work on shared initiatives. Develop processes that leverage the strengths of both departments to achieve better outcomes.
- Example 2:
Input: In academic research, how can we find overlapping areas between different disciplines?
Output: Organize interdisciplinary workshops or conferences. Encourage researchers to explore literature from adjacent fields. Look for common methodologies or theoretical frameworks that can be applied across disciplines. Develop joint research projects that address complex problems requiring diverse expertise.
Diagram (Optional): [Two circles with a shaded area of intersection]

--- 

Name: Continuous Relation
Description: This task emphasizes ongoing connections and cyclical processes, seeking perpetual interactions and feedback loops.
Example(s):

- Example 1:
Input: How can a company maintain a continuous relation with its customers?
Output: Implement a robust customer relationship management (CRM) system. Regularly engage customers through personalized communications, surveys, and loyalty programs. Provide ongoing support and value-added services. Use feedback to continuously improve products and services, creating a cycle of engagement and improvement.
- Example 2:
Input: In ecosystem management, how can we ensure continuous relations between different species?
Output: Monitor interactions between species over time. Maintain habitat connectivity to allow for natural movement and interactions. Implement conservation strategies that consider the entire food web and nutrient cycles. Regularly assess and adjust management practices based on observed changes in species relationships.
Diagram (Optional): [An infinity symbol-like shape]


---

Sources: 
https://x.com/IntuitMachine/status/1814264457255608693/photo/1 