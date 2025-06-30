/*
Given an integer N, print
1 2 3 4 5 
1 2 3 4 
1 2 3 
1 2 
1  
*/
class Solution{
    pattern(N) {
        for(let i = 0; i < N; i++){
            let rows = "";
            for ( let j = N; j > i; j-- ){
                rows += (`${N - j + 1} `);
            }
            console.log(rows);
        }
    }
}

new Solution().pattern(5)