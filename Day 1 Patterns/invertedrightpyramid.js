/*
Given an integer N, print
# # # # # # 
# # # # #
# # # #
# # # 
# # 
# 
*/
class Solution{
    pattern(N){
        for (let i = 0 ; i < N; i++){
            let rows = "";
            for (let j = N; j > i; j--) {
                rows += "* ";
            }
            console.log(rows);
        }
    }
}

new Solution().pattern(6);