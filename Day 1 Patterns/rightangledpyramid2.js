/*
Given an integer N, print
1
2 2 
3 3 3 
4 4 4 4 
5 5 5 5 5 
*/
class Solution {
    pattern (N) {
        for(let i = 1; i <= N; i++){
            let rows = " ";
            for (let j = 1; j<=i; j++){
                rows += `${i} `;
            }
            console.log(rows);
        }
    }
}

new Solution().pattern(5);
