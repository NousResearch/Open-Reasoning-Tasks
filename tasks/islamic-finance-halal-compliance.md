# Islamic Finance Halal Compliance

## Description:
This task evaluates whether financial choices are compatible with Islamic finance constraints using explicit screening rules. The model must reason through business activity filters, leverage/interest thresholds, contract structure, and purification requirements, then produce a clear compliance verdict.

## Modality:
Text only

## Examples:

### Example 1:

Input:
```
Use the following screening policy:
- Business activity screen: fail if core revenue is from alcohol, gambling, conventional banking, adult entertainment, or weapons manufacturing.
- Financial ratio screens:
  - Interest-bearing debt / market cap must be <= 33%
  - Cash and interest-bearing securities / market cap must be <= 33%

Company A data:
- Core business: cloud software
- Revenue mix: 94% software subscriptions, 6% treasury interest
- Interest-bearing debt / market cap: 24%
- Cash and interest-bearing securities / market cap: 38%

Question: Is Company A compliant under this policy?
```

Output:
```
Not compliant under the stated policy.

Reasoning:
1. Business activity screen passes: cloud software is a permissible core activity.
2. Debt ratio passes: 24% <= 33%.
3. Cash/interest-bearing securities ratio fails: 38% > 33%.

Conclusion: Company A fails one mandatory financial ratio screen, so it is not compliant.
```

### Example 2:

Input:
```
Policy for purification:
- If an otherwise-compliant stock has incidental non-permissible income, donate that percentage of dividend income to purification.

Investor received:
- Dividend: $1,250
- Non-permissible income ratio reported by screening provider: 4.8%

Question: How much should be purified?
```

Output:
```
Purification amount = 4.8% of $1,250 = $60.00.

Calculation:
- 0.048 * 1250 = 60

Conclusion: Donate $60.00 as purification.
```

### Example 3:

Input:
```
Choose the more Shariah-aligned financing structure based on contract form:

Option A:
- Conventional loan
- Principal guaranteed
- Fixed 8% annual interest payment

Option B:
- Musharakah partnership
- Capital contributed by both parties
- Profit sharing at pre-agreed ratio
- Loss sharing proportional to capital contribution

Question: Which option is more aligned and why?
```

Output:
```
Option B is more Shariah-aligned.

Reasoning:
1. Option A is an interest-based debt contract with fixed return on principal, which conflicts with riba prohibition.
2. Option B is equity-like risk sharing (profit-and-loss sharing), which matches core Islamic finance principles.

Conclusion: Option B is the compliant structure among the two.
```

### Example 4:

Input:
```
A DeFi vault advertises "halal yield". Terms:
- User deposits stablecoins.
- Protocol lends to margin traders and charges variable interest.
- Vault pays depositors from collected lending interest minus fees.
- No ownership in real assets; returns come from lending spread.

Question: Based only on these terms, is the yield source likely compliant? Explain.
```

Output:
```
Likely not compliant based on the stated mechanism.

Reasoning:
1. Return source is lending interest from margin borrowing.
2. Depositor payout is directly derived from interest spread, not trade or asset profit-sharing.
3. Structure appears debt-interest based rather than partnership/asset-backed profit model.

Conclusion: This setup is likely non-compliant unless the underlying return mechanism is materially restructured.
```

## Tags:
- Islamic Finance
- Halal Compliance
- Financial Screening
- Ethical Reasoning
- Risk Assessment
