# Crypto Portfolio Optimization

## Description:
Analyze crypto portfolios and market conditions to recommend optimal allocation strategies. This task requires reasoning about risk management, correlation analysis, market cycles, DeFi yield opportunities, and portfolio rebalancing logic while considering gas fees and tax implications.

## Modality:
Text -> Text

## Examples:

### Example 1:

Input:

```
Current Portfolio:
- BTC: $50,000 (50%)
- ETH: $30,000 (30%)
- SOL: $15,000 (15%)
- USDC: $5,000 (5%)

Total Value: $100,000
Risk Tolerance: Moderate
Time Horizon: 1-2 years
Gas Budget: $200/month

Market Conditions:
- BTC trending sideways after 30% rally
- ETH outperforming due to upcoming upgrade
- SOL showing weakness (down 15% this month)
- DeFi yields: 8-12% on stablecoins, 4-6% on ETH

Goals:
1. Maintain exposure to major assets
2. Generate passive income
3. Rebalance if needed

Question: Should I rebalance? If yes, what's the optimal allocation?
```

Output:

```
ANALYSIS & RECOMMENDATION

1. CURRENT STATE ASSESSMENT
   - BTC overweight vs. target (50% vs. typical 40-45%)
   - ETH position reasonable but could capture more upside
   - SOL underperforming, potential dead weight
   - Idle USDC not generating yield (missed opportunity)

2. MARKET CONTEXT
   - BTC consolidation = good time to trim without FOMO
   - ETH upgrade catalyst = increase allocation before event
   - SOL weakness = opportunity to cut losers
   - DeFi yields attractive = should deploy stablecoins

3. REBALANCING LOGIC
   
   Sell:
   - $5,000 BTC (10% reduction) → reduce to 40%
   - $10,000 SOL (67% reduction) → reduce to 5%
   
   Buy:
   - $5,000 additional ETH → increase to 35%
   - Convert to $10,000 USDC → increase to 15%
   
   New Allocation:
   - BTC: $45,000 (40%) ✓
   - ETH: $35,000 (35%) ✓
   - SOL: $5,000 (5%) ✓
   - USDC: $15,000 (15%) → Deploy to DeFi ✓
   - Total: $100,000

4. YIELD STRATEGY
   - Deploy $15,000 USDC to Aave/Compound (8% APY = $1,200/year)
   - Stake $35,000 ETH (4.5% APY = $1,575/year)
   - Total passive income: ~$2,775/year (2.8% portfolio yield)

5. EXECUTION PLAN
   - Week 1: Sell SOL gradually (avoid slippage)
   - Week 2: Trim BTC during strength
   - Week 3: Buy ETH on any dips
   - Week 4: Deploy stablecoins to highest-rated DeFi protocols

6. GAS OPTIMIZATION
   - Batch transactions to save fees
   - Use Layer 2 for stablecoin deployment (Arbitrum/Optimism)
   - Estimated total gas: ~$150 (within budget)

7. RISK MANAGEMENT
   - Maintains diversification (no single asset >40%)
   - Cuts losing position (SOL) before further losses
   - Adds income component (reduces volatility impact)
   - Keeps 5% dry powder for opportunities

DECISION: YES, rebalance with the outlined allocation. Expected outcome: reduced volatility, increased income, better positioned for ETH catalyst.
```

---

### Example 2:

Input:

```
Portfolio Type: DeFi Yield Farming
Current Holdings:
- $50,000 in Curve 3pool (earning 5% APY)
- $30,000 in Uniswap V3 ETH/USDC (earning 12% APY but high impermanent loss risk)
- $20,000 in idle USDT

Risk Level: Aggressive
Goal: Maximize APY while managing IL risk

New Opportunities:
- GMX staking: 18% APY (GMX rewards)
- Pendle PT/YT strategy: 25% APY (fixed yield)
- Convex CVX locking: 15% APY + bribes
- GLP vault: 20% APY (real yield but high volatility)

Should I rotate? What's the optimal strategy?
```

Output:

```
YIELD FARMING OPTIMIZATION

1. CURRENT POSITION ANALYSIS
   
   Curve 3pool:
   - Pros: Low risk, stable returns, battle-tested
   - Cons: APY too low for aggressive profile (5% < market)
   - Status: ROTATE OUT partially
   
   Uniswap V3 ETH/USDC:
   - Pros: Good APY, liquid market
   - Cons: Concentrated liquidity = high IL risk if range breaks
   - Status: MONITOR closely, consider position management
   
   Idle USDT:
   - Status: CRITICAL - deploy immediately (losing opportunity cost)

2. OPPORTUNITY EVALUATION
   
   GMX Staking (18% APY):
   - Risk: Medium (GMX token volatility)
   - Sustainability: High (real fees from trading)
   - Rating: ATTRACTIVE
   
   Pendle PT/YT (25% APY):
   - Risk: Low-Medium (fixed rate component)
   - Complexity: High (requires understanding PT/YT mechanics)
   - Rating: EXCELLENT for portion of portfolio
   
   Convex CVX (15% APY):
   - Risk: Low (established protocol)
   - Liquidity: Good (can unlock after 16 weeks)
   - Rating: SOLID base position
   
   GLP Vault (20% APY):
   - Risk: HIGH (delta exposure to crypto assets)
   - Sustainability: High (real trader losses)
   - Rating: GOOD but requires monitoring

3. OPTIMAL ALLOCATION STRATEGY
   
   Exit/Reduce:
   - Reduce Curve 3pool: $50k → $20k (60% reduction)
   - Keep Uniswap V3: $30k (monitor IL)
   
   Deploy Freed Capital + Idle:
   - $30k from Curve + $20k idle = $50k to deploy
   
   New Positions:
   - Pendle PT/YT: $20k (25% APY) = $5,000/year
   - GMX staking: $15k (18% APY) = $2,700/year
   - Convex CVX: $10k (15% APY) = $1,500/year
   - GLP vault: $5k (20% APY) = $1,000/year
   
   Final Allocation:
   - Curve 3pool: $20k (20%) - Base stable position
   - Uniswap V3: $30k (30%) - Active management
   - Pendle PT/YT: $20k (20%) - Fixed yield
   - GMX: $15k (15%) - Real yield
   - Convex: $10k (10%) - DeFi blue chip
   - GLP: $5k (5%) - High risk/reward
   
   Total: $100k

4. PROJECTED RETURNS
   
   Current APY:
   - Curve: $50k × 5% = $2,500
   - Uniswap: $30k × 12% = $3,600
   - Idle: $20k × 0% = $0
   - Total: $6,100/year (6.1% portfolio APY)
   
   New APY:
   - Curve: $20k × 5% = $1,000
   - Uniswap: $30k × 12% = $3,600
   - Pendle: $20k × 25% = $5,000
   - GMX: $15k × 18% = $2,700
   - Convex: $10k × 15% = $1,500
   - GLP: $5k × 20% = $1,000
   - Total: $14,800/year (14.8% portfolio APY)
   
   Improvement: +$8,700/year (+143% increase)

5. RISK MANAGEMENT
   
   - Diversified across 6 protocols (reduces single-protocol risk)
   - Mix of stable (Curve), active (Uniswap), and yield (rest)
   - Pendle PT provides fixed-rate component (hedge against APY drops)
   - Small GLP allocation limits downside exposure
   - Exit liquidity verified for all positions

6. EXECUTION PLAN
   
   Day 1-2:
   - Withdraw $30k from Curve 3pool
   - Enter Pendle PT/YT position ($20k)
   
   Day 3-4:
   - Deploy $15k to GMX staking
   - Lock $10k in Convex CVX
   
   Day 5:
   - Add $5k to GLP vault
   - Set up monitoring alerts for Uniswap V3 range
   
   Week 2+:
   - Monitor all positions weekly
   - Harvest and compound rewards
   - Adjust Uniswap range if needed

DECISION: YES, rotate immediately. New strategy increases APY from 6.1% to 14.8% while maintaining acceptable risk for aggressive profile. Diversification across quality protocols reduces single-point-of-failure risk.
```

---

### Example 3:

Input:

```
Scenario: Bear Market Portfolio Defense

Current Portfolio:
- BTC: $40,000 (down 60% from ATH)
- ETH: $25,000 (down 65% from ATH)
- ALTs: $15,000 (down 80% from ATH - mix of L1s and DeFi tokens)
- Stablecoins: $5,000

Total: $85,000 (was $200,000 at peak)
Portfolio down 57.5%

Market Conditions:
- Macro: Rising interest rates, risk-off environment
- Crypto: Sustained downtrend, low volume
- Sentiment: Fear & Greed Index at 15 (Extreme Fear)
- DeFi yields falling (3-5% on stables)

Psychology: Feeling demoralized, considering capitulation

Questions:
1. Should I sell everything and preserve capital?
2. Should I DCA more at these prices?
3. How should I position for the next cycle?
```

Output:

```
BEAR MARKET PORTFOLIO DEFENSE STRATEGY

1. PSYCHOLOGICAL REALITY CHECK
   
   ❌ DON'T: Panic sell at bottom (classic retail mistake)
   ❌ DON'T: Go all-in on hopium ("this is the bottom!")
   ✅ DO: Think in probabilities and risk-adjusted scenarios
   ✅ DO: Have a systematic plan, not emotional reactions

2. CURRENT POSITION ANALYSIS
   
   BTC ($40k):
   - Quality: HIGHEST - Survives all cycles
   - Action: HOLD core position, consider adding
   
   ETH ($25k):
   - Quality: HIGH - Strong fundamentals, ecosystem
   - Action: HOLD, potentially increase allocation
   
   ALTs ($15k):
   - Quality: MIXED - Most won't survive bear market
   - Action: CRITICAL EVALUATION needed
   
   Stablecoins ($5k):
   - Status: Underweight for bear market (should be 20-40%)

3. SCENARIO PLANNING
   
   Scenario A: Bottom is in (30% probability)
   - Best Action: Hold everything, add more
   - Upside: Capture full recovery
   - Downside: Minimal if this is correct
   
   Scenario B: Further 30-50% drop (50% probability)
   - Best Action: Preserve capital, have dry powder
   - Upside: Buy cheaper later
   - Downside: Watching portfolio shrink more
   
   Scenario C: Extended bear (2+ years) (20% probability)
   - Best Action: Shift to income generation, preserve purchasing power
   - Upside: Earn yield while waiting
   - Downside: Opportunity cost if quick recovery

4. OPTIMAL STRATEGY (Weighted for probabilities)
   
   Phase 1: Triage ALTs (IMMEDIATE)
   - Sell underperforming ALTs: $15k → $12k (assume 20% slippage in bear)
   - Keep only top 2-3 with real utility/revenue
   - Rationale: Most alts go to zero in bear markets
   
   Phase 2: Rebalance to Defense (Week 1-2)
   - Convert freed ALT capital to stables: +$12k
   - Shift 10% of BTC: $4k → stables
   - Shift 20% of ETH: $5k → stables
   - New stables: $5k + $12k + $4k + $5k = $26k
   
   New Allocation:
   - BTC: $36,000 (42%)
   - ETH: $20,000 (24%)
   - Quality ALTs: $3,000 (4%)
   - Stablecoins: $26,000 (30%)
   - Total: $85,000
   
   Phase 3: Deploy Stables Strategically
   - $13k → High-quality DeFi yield (5% = $650/year)
   - $13k → Keep as dry powder for DCA
   
   Phase 4: DCA Plan (Next 12 months)
   - $1,000/month systematic buying
   - 70% BTC, 30% ETH
   - Buy regardless of price (remove emotion)
   - Total deployment: $13k over a year

5. MONTH-BY-MONTH EXECUTION
   
   Month 1-2: Triage & Rebalance
   - Exit weak ALTs
   - Build stable position
   - Set up yield farms
   
   Month 3-12: Systematic Accumulation
   - Auto-buy $1k/month (BTC/ETH)
   - Monitor quality ALT opportunities
   - Harvest and compound DeFi yields
   
   Month 12+: Positioning for Recovery
   - Should have accumulated $12k more BTC/ETH
   - Earned $650 in yields
   - Preserved $13k dry powder for major opportunities

6. EXPECTED OUTCOMES BY SCENARIO
   
   If Scenario A (bottom is in):
   - Preserved 80% of holdings
   - Accumulated 15% more at low prices
   - Moderate upside capture: 70-80% of rally
   
   If Scenario B (further drop):
   - 30% in stables protects from drawdown
   - DCA buys cheaper as it drops
   - Strong position when bottom actually hits
   
   If Scenario C (extended bear):
   - Yields generate income
   - Systematic buying averages down cost basis
   - Exit runway secured

7. PSYCHOLOGICAL MANAGEMENT
   
   ✅ You've de-risked (less exposure to volatility)
   ✅ You have a plan (removes decision paralysis)
   ✅ You're earning yield (psychologically satisfying)
   ✅ You're still accumulating (don't miss the bottom)
   ✅ You can sleep better (not 100% in volatile assets)

FINAL RECOMMENDATION:

DO NOT capitulate completely. DO NOT go all-in. 

Follow the phased approach:
1. Cut weak ALTs NOW
2. Rebalance to 30% stables over 2 weeks
3. Deploy half to yield, half for DCA
4. Stick to $1k/month systematic buying
5. Review every quarter, adjust as needed

This strategy:
- Protects capital (30% stables)
- Maintains core exposure (BTC/ETH)
- Generates income (DeFi yields)
- Accumulates at better prices (DCA)
- Removes emotional decision-making

Expected result: Preservation of capital with upside optionality. If bottom is in, you catch 70% of the move. If it drops more, you buy cheaper. If it's extended, you earn yield and DCA.

This is how you survive bear markets and thrive in the next bull.
```

## Tags:
- crypto
- portfolio-management
- defi
- investment-strategy
- risk-management
- yield-optimization
- market-analysis
- financial-reasoning