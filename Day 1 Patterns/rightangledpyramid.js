/*
Given an integer N, print
1
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 
*/
class Solution {
    pattern(N) {
        for (let i = 1; i <= N; i++){
            let rows = "";
            for (let j = 1; j <= i; j++){
                rows += (`${j} `);
            }
            console.log(rows);
        }
    }
}

new Solution().pattern(5)