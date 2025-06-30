/*
Given an Integer N, print 
* * * * 
* * * * 
* * * *
* * * *
*/
class Solution {
    pattern(N) {
        for (let i=0; i< N; i++){
            let row = "";
            for (let j=0; j < N; j++){
                row +="# "
            }
            console.log(row);
        }
    }
}

new Solution().pattern(5);
