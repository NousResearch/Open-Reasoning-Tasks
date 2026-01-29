# Tagalog Linguistic Ambiguity Resolution

## Description

This task tests the model's ability to resolve ambiguities in Tagalog sentences that arise from the language's unique grammatical features, including focus system, affixation patterns, and context-dependent word meanings.

## Purpose

- Evaluate understanding of Austronesian language features
- Test disambiguation skills in non-English contexts
- Assess morphological analysis capabilities
- Measure contextual inference in Tagalog

## Examples

### Example 1: Actor vs. Goal Focus Ambiguity

**Input:**
Disambiguate the sentence: "Binili ni Maria ang libro."

**Expected Reasoning:**
The model should:
1. Identify the verb focus marker (um/in-)
2. Determine that "-in-" indicates goal/patient focus
3. Identify "libro" (book) as the topic/subject
4. Recognize "ni Maria" as the actor in genitive case
5. Provide correct interpretation

**Sample Output:**
The sentence "Binili ni Maria ang libro" uses goal/patient focus:
- **Verb**: Binili (from "bili" + "-in-" infix = was bought)
- **Focus**: Goal focus (indicated by "-in-" affix)
- **Topic/Subject**: ang libro (the book)
- **Actor**: ni Maria (by Maria, genitive marker "ni")

**Correct translation**: "The book was bought by Maria."

**Why not**: "Maria bought the book."
While semantically similar, the Tagalog sentence emphasizes the book as the topic, not Maria. If Maria were the focus, the sentence would be "Bumili si Maria ng libro" (Maria bought a book).

### Example 2: Polysemy Resolution

**Input:**
Determine the meaning of "bata" in these sentences:
1. "Ang bata ay naglalaro sa labas."
2. "Ang bata ng kulay ay hindi maganda."

**Expected Reasoning:**
The model should:
1. Recognize "bata" has multiple meanings
2. Use context clues to disambiguate
3. Identify grammatical structure
4. Provide correct interpretation for each

**Sample Output:**

**Sentence 1**: "Ang bata ay naglalaro sa labas."
- **Meaning**: child/young person
- **Context clue**: "naglalaro" (playing) suggests animate subject
- **Translation**: "The child is playing outside."

**Sentence 2**: "Ang bata ng kulay ay hindi maganda."
- **Meaning**: lightness/paleness (of color)
- **Context clue**: "ng kulay" (of color) indicates color property
- **Translation**: "The lightness of the color is not good."

Same word, completely different meanings based on context.

### Example 3: Reduplication Interpretation

**Input:**
Explain the difference in meaning:
1. "lakad" vs. "lakad-lakad"
2. "pula" vs. "pula-pula"
3. "dahan" vs. "dahan-dahan"

**Expected Reasoning:**
The model should:
1. Recognize reduplication as a morphological process
2. Identify different types of reduplication
3. Explain semantic effects
4. Provide examples of usage

**Sample Output:**

**1. lakad vs. lakad-lakad**
- **lakad**: walk (single action)
- **lakad-lakad**: stroll, leisurely walk (diminutive/casual)
- Effect: Reduplication adds casualness or lessens intensity

**2. pula vs. pula-pula**
- **pula**: red (pure red)
- **pula-pula**: reddish, somewhat red
- Effect: Partial reduplication indicates approximation

**3. dahan vs. dahan-dahan**
- **dahan**: slow (adjective)
- **dahan-dahan**: slowly, carefully (adverb, intensified)
- Effect: Full reduplication creates adverbial form with emphasis

Tagalog reduplication patterns:
- **Full reduplication**: Intensification, plurality, or adverbial
- **Partial reduplication**: Diminutive, approximation, or ongoing action
- **Context-dependent**: Same pattern can have different effects

### Example 4: Pronoun Reference Ambiguity

**Input:**
Identify the ambiguity in: "Nakita ni Juan si Pedro. Pumunta siya sa tindahan."

Who went to the store?

**Expected Reasoning:**
The model should:
1. Recognize pronoun ambiguity
2. Note lack of gender distinction in "siya"
3. Provide both interpretations
4. Suggest disambiguation strategies

**Sample Output:**

**Ambiguity**: "siya" (he/she) could refer to either Juan or Pedro.

**Possible interpretations**:
1. Juan went to the store (siya = Juan)
2. Pedro went to the store (siya = Pedro)

**Why ambiguous**:
- Tagalog pronouns don't distinguish gender
- No clear topic continuation marker
- Both referents are male and mentioned in previous sentence

**Disambiguation strategies**:
1. **Repeat the name**: "Pumunta si Juan sa tindahan"
2. **Use topic marker**: "Siya (si Juan) ay pumunta sa tindahan"
3. **Add clarifying context**: "Pagkatapos, pumunta si Juan sa tindahan"
4. **Use demonstratives**: "Pumunta ang huli sa tindahan" (the latter)

In conversation, context and pragmatics usually resolve this.

## Difficulty Level

**Medium**

Requires:
- Knowledge of Tagalog grammar
- Understanding of morphological processes
- Ability to analyze linguistic structure
- Contextual reasoning skills

## Category

- Linguistic Reasoning
- Morphological Analysis
- Semantic Disambiguation
- Syntactic Parsing
- Cross-linguistic Understanding

## Evaluation Criteria

A strong response should:
1. **Identify grammatical features**: Recognize affixes, focus system, etc.
2. **Provide linguistic analysis**: Explain structural patterns
3. **Use correct terminology**: Employ appropriate linguistic terms
4. **Show contextual awareness**: Use surrounding context to disambiguate
5. **Compare alternatives**: Explain why other interpretations don't work
6. **Demonstrate metalinguistic knowledge**: Explain language rules explicitly

## Variations

- Other Philippine languages (Cebuano, Ilocano, Hiligaynon)
- Other Austronesian languages (Indonesian, Malay, Malagasy)
- Other focus-prominent languages
- Other languages with extensive affixation

## Related Tasks

- Morphological analysis
- Syntax parsing
- Word sense disambiguation
- Anaphora resolution
- Translation tasks

## References

- Tagalog grammar (Schachter & Otanes)
- Philippine linguistics literature
- Austronesian language typology

## Notes

Useful for:
- Multilingual model evaluation
- Testing non-English linguistic reasoning
- Assessing morphological processing
- Evaluating cross-linguistic transfer
