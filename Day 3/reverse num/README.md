# Reverse Digits of a Number

## Problem Statement
Given an integer **N**, return the reverse of the given number.

**Note:** If a number has trailing zeros, then its reverse will not include them. For example, the reverse of `10400` will be `401` instead of `00401`.

## Examples
```
Input: 7789
Output: 9877

Input: 10400  
Output: 401

Input: -123
Output: -321
```

## Approach
To reverse an integer, we use a digit extraction algorithm. Instead of just extracting digits, we append them to build the reversed number from right to left.

## Algorithm

### Step 1: Initialize Variables
- Initialize `reverseN = 0` to store the reversed number
- Get input `N` from user using readline

### Step 2: Extract and Build
Using a `while` loop, iterate while `N > 0`:

1. **Extract last digit:** `lastDigit = N % 10`
2. **Build reverse number:** `reverseN = (reverseN * 10) + lastDigit`
   - Multiply by 10 to shift existing digits left
   - Add the new digit to the ones place
3. **Remove last digit:** `N = Math.floor(N / 10)`

### Step 3: Display Result
After the loop ends (when `N = 0`), display the `reverseN` and close the readline interface.

## Visual Walkthrough
For input `7789`:

```
Initial: N = 7789, reverseN = 0

Iteration 1: 
  lastDigit = 7789 % 10 = 9
  reverseN = (0 * 10) + 9 = 9
  N = floor(7789 / 10) = 778

Iteration 2:
  lastDigit = 778 % 10 = 8
  reverseN = (9 * 10) + 8 = 98
  N = floor(778 / 10) = 77

Iteration 3:
  lastDigit = 77 % 10 = 7
  reverseN = (98 * 10) + 7 = 987
  N = floor(77 / 10) = 7

Iteration 4:
  lastDigit = 7 % 10 = 7
  reverseN = (987 * 10) + 7 = 9877
  N = floor(7 / 10) = 0

Result: 9877
```

### How to Run
```bash
# Run the program
node reverseNum.js

# Then enter a number when prompted
# Example: Enter 7789 and press Enter
```

## Time & Space Complexity
- **Time Complexity:** O(log₁₀(n)) - where n is the input number
  - We process each digit once, and the number of digits is log₁₀(n)
- **Space Complexity:** O(1) - constant extra space used

## Key Concepts Used
- **Modulus operator (%):** Extract rightmost digit
- **Integer division:** Remove rightmost digit  
- **Mathematical building:** Construct number digit by digit
- **While loop:** Process until no digits remain

## Edge Cases Handled
- Trailing zeros are automatically ignored (e.g., 10400 → 401)
- Single digit numbers work correctly
- Zero returns zero

## Extensions
- Handle negative numbers by tracking sign separately
- Add overflow protection for very large integers
- Input validation for non-numeric values
