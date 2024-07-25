# Proof Verification

## Description:
This task involves verifying mathematical proofs to evaluate the model's ability to understand logical arguments, identify correct steps in a proof, and spot errors or gaps in reasoning.

## Modality:
Text only

## Examples:

### Example 1:

Input:

```
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
```

Output:

```
The proof is correct. It uses the method of contradiction and follows logical steps to show that assuming √2 is rational leads to a contradiction, thereby proving that √2 must be irrational.
```

---

### Example 2:

Input:

```
Verify the following proof that for any integer n, if n² is even, then n is even:
1. Assume n is odd.
2. Then n = 2k + 1 for some integer k.
3. n² = (2k + 1)² = 4k² + 4k + 1 = 2(2k² + 2k) + 1
4. Therefore, n² is odd.
5. This contradicts the given that n² is even.
6. So, our assumption must be false, and n must be even.
```

Output:

```
The proof is correct. It uses proof by contradiction effectively. By assuming n is odd and showing that this leads to n² being odd (which contradicts the given information), the proof logically concludes that n must be even.
```

## Tags:
- Mathematics
- Logic
- Proof Verification
- Number Theory
- Reasoning