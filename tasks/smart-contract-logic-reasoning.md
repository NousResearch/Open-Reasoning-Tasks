# Smart Contract Logic Reasoning

## Description:
This task involves analyzing smart contract code, rules, or specifications to predict execution outcomes, identify potential vulnerabilities, and reason about state transitions. It evaluates the model's ability to trace program logic, understand conditional execution paths, and identify edge cases in deterministic, blockchain-based systems where errors are irreversible and financially consequential.

## Modality:
Text only

## Examples:

### Example 1:

Input:

```
A smart contract implements a token sale with the following rules:
- The price starts at 1 ETH per 100 tokens
- After every 1,000 tokens sold, the price increases by 0.5 ETH per 100 tokens
- There is a maximum supply of 5,000 tokens
- Users cannot buy more than 500 tokens in a single transaction

Alice wants to buy 500 tokens when 900 tokens have already been sold. How much ETH will she need to pay, and why?
```

Output:

```
Alice's purchase crosses a price tier boundary, so she pays two different rates:

1. Current tier (0-999 tokens sold): Price is 1 ETH per 100 tokens
   - Only 100 tokens remain at this price (1,000 - 900 = 100)
   - Cost for first 100 tokens: 1 ETH

2. Next tier (1,000-1,999 tokens sold): Price is 1.5 ETH per 100 tokens
   - Remaining 400 tokens fall into this tier
   - Cost for next 400 tokens: 4 × 1.5 = 6 ETH

Total cost: 1 + 6 = 7 ETH for 500 tokens

Key reasoning: The contract must handle purchases that span price boundaries. If the contract only checks the price at the start of the transaction, Alice would pay just 5 ETH (500/100 × 1). This discrepancy between intended and actual behavior is a common source of smart contract bugs.
```

---

### Example 2:

Input:

```
Consider a simple escrow smart contract with these rules:
- A buyer deposits funds into the contract
- The seller delivers goods off-chain and marks the order as "delivered"
- The buyer has 7 days to either confirm receipt or raise a dispute
- If the buyer confirms, funds release to the seller
- If the buyer disputes, a designated arbitrator decides
- If 7 days pass with no action, funds automatically release to the seller

What happens if the buyer sends the deposit transaction but it gets included in a block right after the seller marks "delivered" in the same block? Trace the state transitions.
```

Output:

```
This scenario involves transaction ordering within the same block, which requires careful reasoning:

State transitions:
1. Initial state: Contract exists, no active order
2. Block N contains two transactions (order depends on miner/validator):

Scenario A - Buyer's deposit is processed first:
   - State: order = {status: "funded", buyer: Alice, amount: 1 ETH}
   - Seller's "delivered" tx processes next
   - State: order = {status: "delivered", deadline: block.timestamp + 7 days}
   - Result: Normal flow, buyer has 7 days to confirm or dispute

Scenario B - Seller's "delivered" tx is processed first:
   - State: No active order exists yet
   - Seller's tx reverts (cannot mark delivered on non-existent order)
   - Buyer's deposit processes successfully
   - State: order = {status: "funded", buyer: Alice, amount: 1 ETH}
   - Result: Seller must send a new "delivered" transaction

Key insight: Transaction ordering within a block matters. In Scenario B, the seller wastes gas on a reverted transaction. A well-designed contract checks that the order is in the correct state before allowing transitions, making Scenario B fail gracefully rather than creating an inconsistent state.
```

---

### Example 3:

Input:

```
A decentralized voting contract has these rules:
- Each address gets exactly one vote
- Voting is open for 100 blocks after deployment
- A proposal passes if it receives more "yes" votes than "no" votes
- The result can only be finalized after the voting period ends

A user creates a contract that:
1. Calls the voting contract to vote "yes"
2. Transfers its tokens to a new address
3. The new address calls the voting contract to vote "yes" again

Does this attack work? Why or why not?
```

Output:

```
Whether this attack works depends on how the voting contract tracks voters:

Case 1 - Contract tracks by address (mapping(address => bool) hasVoted):
   The attack WORKS. Each new contract address is a fresh address that hasn't voted yet.
   - Step 1: Contract A votes "yes" → hasVoted[A] = true
   - Step 2: Tokens transfer to address B (a new contract)
   - Step 3: Contract B votes "yes" → hasVoted[B] = true
   - Result: One token holder has cast two votes

Case 2 - Contract tracks by token balance at a snapshot block:
   The attack FAILS. A snapshot of balances is taken at a specific block.
   - The snapshot records which addresses held tokens at block X
   - Transferring tokens after the snapshot doesn't grant new voting rights
   - Address B either had tokens at snapshot time or didn't

Case 3 - Contract checks current token balance when voting:
   The attack PARTIALLY works. The user can vote with address A, transfer, then vote with address B. However, address A's vote might be invalidated if the contract checks balance at finalization.

Key insight: This is the "double voting" or "vote buying" problem. Snapshot-based voting (Case 2) is the standard defense, commonly implemented as ERC-20 token snapshots taken at proposal creation time.
```

---

### Example 4:

Input:

```
A lending protocol smart contract has these rules:
- Users deposit collateral (ETH) and borrow stablecoins
- The collateralization ratio must stay above 150%
- If the ratio drops below 150%, anyone can liquidate the position
- Liquidators repay part of the debt and receive the collateral at a 10% discount
- The protocol charges a 0.5% fee on each borrow

Bob deposits 10 ETH (worth $2,000 each, total $20,000) and borrows $10,000 in stablecoins. ETH then drops to $1,400. What is Bob's collateralization ratio, can he be liquidated, and what would a liquidator's profit be if they liquidate 50% of the debt?
```

Output:

```
Step 1: Calculate current collateralization ratio
   - Collateral value: 10 ETH × $1,400 = $14,000
   - Debt: $10,000 (plus $50 borrow fee = $10,050 total)
   - Ratio: $14,000 / $10,050 = 139.3%

Step 2: Can Bob be liquidated?
   - Yes. The ratio (139.3%) is below the 150% threshold.

Step 3: Calculate liquidator's profit on 50% liquidation
   - Debt repaid by liquidator: $10,050 × 50% = $5,025
   - Collateral received at 10% discount:
     - $5,025 worth of ETH at market price = 3.589 ETH
     - With 10% bonus: 3.589 / 0.9 = 3.988 ETH
   - Liquidator spends: $5,025
   - Liquidator receives: 3.988 ETH (worth $5,583.20 at $1,400/ETH)
   - Liquidator's profit: $5,583.20 - $5,025 = $558.20

Step 4: Bob's position after liquidation
   - Remaining collateral: 10 - 3.988 = 6.012 ETH (worth $8,416.80)
   - Remaining debt: $10,050 - $5,025 = $5,025
   - New ratio: $8,416.80 / $5,025 = 167.5% (now healthy)

Key insight: Liquidation mechanics create profitable opportunities that incentivize external actors to keep the protocol solvent. The 10% discount must be large enough to attract liquidators even during high gas price periods, but not so large that borrowers lose excessive collateral.
```

---

### Example 5:

Input:

```
A time-locked wallet contract has these rules:
- The owner deposits tokens with a lock period (e.g., 365 days)
- Tokens cannot be withdrawn before the lock expires
- The owner can extend the lock period but cannot shorten it
- After the lock expires, only the owner can withdraw

The contract stores the unlock time as: unlockTime = block.timestamp + lockDuration

A user sets a lock duration of type uint256 to the value (2^256 - 1). What happens?
```

Output:

```
This is an integer overflow vulnerability:

Analysis:
- block.timestamp is a non-zero positive integer (e.g., 1700000000)
- lockDuration = 2^256 - 1 (the maximum uint256 value)
- unlockTime = block.timestamp + lockDuration

In Solidity versions < 0.8.0 (without SafeMath):
   - The addition overflows silently
   - unlockTime wraps around to a very small number
   - Example: 1700000000 + (2^256 - 1) = 1699999999 (approximately)
   - The unlock time is now in the PAST
   - The user can immediately withdraw, defeating the time lock

In Solidity versions >= 0.8.0:
   - Built-in overflow checking causes the transaction to revert
   - The attack fails, and the user cannot set this lock duration
   - No tokens are locked with an invalid duration

Key insight: Integer overflow was one of the most common smart contract vulnerabilities before Solidity 0.8.0 introduced automatic overflow checks. The fix is either using Solidity >= 0.8.0 or applying OpenZeppelin's SafeMath library. Additionally, the contract should validate that lockDuration falls within a reasonable range (e.g., between 1 day and 10 years).
```

## Tags:
- Smart Contracts
- Blockchain Reasoning
- Program Logic Tracing
- State Machine Analysis
- Vulnerability Identification
- Edge Case Detection
- Deterministic Systems
- Synthetic
