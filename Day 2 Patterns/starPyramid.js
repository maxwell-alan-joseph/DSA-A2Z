/*
Given an integer N, print 
    #
  # # #
# # # # #    

*/

class Solution {
    pattern(N) {
        for (let i = 0; i < N; i++) {
            let rows = "";
            
            for (let j = 0; j < N - i - 1; j++) {
                rows += " ";
            }
            
            for (let j = 0; j < i + 1; j++) {
                rows += "# ";
            }
            
            console.log(rows);
        }
    }
}

new Solution().pattern(4);