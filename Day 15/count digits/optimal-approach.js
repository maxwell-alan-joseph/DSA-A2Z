class Solution {
    countDigits(n) {

        let count = Math.floor(Math.log10(n)) + 1;
        
        return count;
    }   
}

const solution = new Solution();
console.log(solution.countDigits(12358));
