# **Check if a Number is Palindrome**

## **Problem Statement**
Given an integer **N**, return `true` if it is a palindrome, else return `false`.

A palindrome number is a number that reads the same backward as forward. For example, `121` is a palindrome because it reads the same from left to right and right to left.

## **Examples**

```
Input: 121
Output: true

Input: 4554  
Output: true

Input: 123
Output: false

Input: 10
Output: false
```

## **Approach**
To check if a number is a palindrome, we reverse the given number using digit extraction and compare it with the original number. If both are equal, the number is a palindrome.

## **Algorithm**

### **Step 1: Initialize Variables**
* Initialize `revNum = 0` to store the reversed number
* Create `dup = N` to store a copy of the original number (since we'll modify N)

### **Step 2: Reverse the Number**
Using a `while` loop, iterate while `N > 0`:
1. **Extract last digit:** `lastDigit = N % 10`
2. **Build reverse number:** `revNum = (revNum * 10) + lastDigit`
   * Multiply by 10 to shift existing digits left
   * Add the new digit to the ones place
3. **Remove last digit:** `N = Math.floor(N / 10)`

### **Step 3: Compare and Return**
After the loop ends, compare `dup` (original number) with `revNum`:
* If `dup === revNum`, return `true` (it's a palindrome)
* Otherwise, return `false` (not a palindrome)

## **Visual Walkthrough**
For input `4554`:

```
Initial: N = 4554, revNum = 0, dup = 4554

Iteration 1: 
  lastDigit = 4554 % 10 = 4
  revNum = (0 * 10) + 4 = 4
  N = floor(4554 / 10) = 455

Iteration 2:
  lastDigit = 455 % 10 = 5
  revNum = (4 * 10) + 5 = 45
  N = floor(455 / 10) = 45

Iteration 3:
  lastDigit = 45 % 10 = 5
  revNum = (45 * 10) + 5 = 455
  N = floor(45 / 10) = 4

Iteration 4:
  lastDigit = 4 % 10 = 4
  revNum = (455 * 10) + 4 = 4554
  N = floor(4 / 10) = 0

Comparison: dup (4554) === revNum (4554) → true
Result: 4554 is a palindrome
```


## **How to Run**

```bash
# Run the program
node index.js

# Output will show whether the number is a palindrome or not
# Example: "4554 is a palindrome"
```


## **Key Concepts Used**
* **Modulus operator (%):** Extract rightmost digit
* **Integer division:** Remove rightmost digit  
* **Mathematical building:** Construct reversed number digit by digit
* **While loop:** Process until no digits remain
* **Comparison:** Check equality between original and reversed numbers


## **Common Test Cases**

| Input | Output | Reason |
|-------|--------|---------|
| 121 | true | Reads same forwards and backwards |
| 4554 | true | Symmetric digits |
| 123 | false | 123 ≠ 321 |
| 10 | false | 10 ≠ 01 (which is 1) |
| 0 | true | Single digit |
| 1 | true | Single digit |
| 1221 | true | Even-length palindrome |

## **Extensions**
* **Handle negative numbers:** Consider if negative numbers can be palindromes
* **String-based approach:** Convert to string and compare with its reverse
* **Optimized approach:** Compare only half the digits instead of reversing entire number
* **Input validation:** Handle non-integer inputs
* **Interactive version:** Accept user input using readline interface
