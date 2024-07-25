# First-Order False Belief

## Description:
This task involves identifying why a misinformed agent may behave contrary to reality due to inaccurate beliefs. It evaluates the model's theory of mind ability and understanding of false beliefs.

## Modality:
Text only

## Examples:

### Example 1:

Input:

```
Paul and Jane are working to debug code. Paul thinks the bug is in the file *server.js*, and Jane agrees. Jane then goes out to lunch. While Jane is at lunch, Paul realizes the problem is instead in the file *tableloader.js*. He then goes on his lunch break. When Jane gets back from lunch, which file will she start debugging?
```

Output:

```
Jane will start debugging the file *server.js*. Even though Paul discovered the bug is in *tableloader.js*, Jane is unaware of this new information. She still believes the bug is in *server.js* based on her last conversation with Paul.
```

---

### Example 2:

Input:

```
A wife tells her husband she's going to improve the brakes of his car, but instead dismantles them. He then drives off a cliff, unable to slow down. Why would he have driven in the car if the breaks didn't work?
```

Output:

```
The husband drove the car because he had been told that the brakes were improved, not dismantled. He was unaware of his wife's actions and believed the brakes were functioning properly based on the information he was given.
```

## Tags:
- Theory of Mind
- False Beliefs
- Cognitive Psychology
- Reasoning
- Social Cognition