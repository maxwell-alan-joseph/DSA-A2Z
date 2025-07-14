class Solution {
    countDigits(n) {
        let str = n.toString();
        let count = 0;
        for (let i = 0; i < str.length; i ++) {
            count ++;
        }
        return count;
    }
}

const solution = new Solution();
console.log(solution.countDigits(23579));
