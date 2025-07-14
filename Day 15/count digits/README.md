# Problem Statement: Given an integer N, return the number of digits in N.
- example 1 
    - input: n = 1234
    - output: 4 
- example 2 
    - input: n = 25674
    - output: 5

## My-Approach 
- given the integer n divide the integer into a string
- and then use for loop
- if x loops happen then the input n has x digits in it !

simplified my-approach 
```
class Solution {
    countDigits(n) {
       return  n.toString().length;
    }
}

```

## Optimal-Approach 
Math.floor(log10(N)) + 1