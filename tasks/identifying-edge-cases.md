# Identifying Edge Cases

## Description:
This task involves analyzing a problem specification, algorithm, or system description to identify edge cases, boundary conditions, and special scenarios that might cause unexpected behavior or require special handling. The goal is to think critically about inputs, states, or conditions that fall outside the "happy path" and could lead to errors, failures, or unintended outcomes.

## Modality:
Text only

## Examples:

### Example 1:

Input:

```
A function calculates the average of numbers in a list by summing all elements and dividing by the count. What edge cases should be considered?
```

Output:

```
Edge cases to consider:

1. Empty list: Division by zero would occur when calculating average of an empty list
2. Single element: Should return the element itself
3. Very large numbers: Sum might cause integer overflow before division
4. Mixed positive and negative numbers: Ensure correct handling of signs
5. Floating point precision: Accumulated rounding errors with many decimal numbers
6. List with all identical values: Average should equal that value exactly
7. List containing zero(s): Zeros should be included in count and sum
8. Extremely long lists: Memory or performance issues with millions of elements
```

---

### Example 2:

Input:

```
A user registration system requires usernames to be "unique and between 3-20 characters." What edge cases should be tested?
```

Output:

```
Edge cases to consider:

1. Boundary lengths: Exactly 3 characters, exactly 20 characters
2. Just outside boundaries: 2 characters, 21 characters (should be rejected)
3. Empty string: 0 characters
4. Whitespace handling: "   " (only spaces), leading/trailing spaces, spaces in middle
5. Case sensitivity: "JohnDoe" vs "johndoe" - are these considered the same?
6. Special characters: Usernames with @, #, emojis, or unicode characters
7. Reserved words: "admin", "null", "undefined", "system"
8. SQL injection attempts: "'; DROP TABLE users;--"
9. Concurrent registration: Two users trying to register same username simultaneously
10. Previously deleted usernames: Can a deleted username be reused?
11. Numeric-only usernames: "12345"
12. Starting with numbers or special characters: "1user", "_user"
```

---

### Example 3:

Input:

```
A ride-sharing app calculates fare based on distance traveled and time elapsed. The formula is: fare = base_fee + (distance × rate_per_mile) + (time × rate_per_minute). What edge cases exist?
```

Output:

```
Edge cases to consider:

1. Zero distance: Passenger cancels immediately or destination equals pickup
2. Zero time: Instantaneous trip (impossible but system should handle)
3. Very short trips: 0.1 miles - minimum fare considerations
4. Very long trips: Cross-country trip, fare caps or special pricing
5. Negative values: GPS errors causing negative distance calculations
6. Stationary time in traffic: High time, low distance - fare fairness
7. GPS signal loss: Distance cannot be calculated for portions of trip
8. Trip crossing midnight: Rate changes at different times
9. Trip crossing zone boundaries: Different rates in different areas
10. Surge pricing transitions: Price changes mid-trip
11. Round trip to same location: Distance > 0 but displacement = 0
12. App crash mid-trip: How to calculate partial fare
13. Decimal precision: Rounding $10.005 - round up or down?
14. Currency conversion: International trips or border crossings
```

---

### Example 4:

Input:

```
A calendar application allows users to schedule recurring events "every N days." What edge cases should be handled?
```

Output:

```
Edge cases to consider:

1. N = 0: Invalid interval, should be rejected or handled
2. N = 1: Daily recurrence
3. Very large N: Event recurring every 10,000 days
4. Negative N: Should be rejected
5. Leap year handling: Event on Feb 29th recurring yearly
6. Daylight saving time: 2 AM event when clocks spring forward
7. Time zone changes: User travels, how do recurring events adjust?
8. Month boundary: "Every 30 days" starting Jan 31st
9. End date before start date: Invalid range
10. No end date: Infinite recurrence - performance implications
11. Past start dates: Scheduling recurring event that started yesterday
12. Overlapping events: Same event recurring creates conflicts
13. Deleted single instance: Skip one occurrence without breaking pattern
14. Event spanning midnight: 11 PM to 1 AM event recurring daily
15. Calendar system differences: Gregorian vs lunar calendars
```

## Tags:
- Critical Thinking
- Software Testing
- Boundary Analysis
- Problem Analysis
- Quality Assurance
- Systems Thinking
- Error Prevention