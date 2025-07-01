/* 
Given an integer N,
    #
  # # #
# # # # #
  # # #
    # 
*/

class Solution {
    pattern(N) {
        for (let i = 0; i < N; i++) {
            let rows = "";
            
            // Add leading spaces
            for (let j = 0; j < N - i - 1; j++) {
                rows += " ";
            }
            
            // Add hash symbols
            for (let j = 0; j < i + 1; j++) {
                rows += "# ";
            }
            
            console.log(rows);
        }
        
        for (let i = N - 2; i >= 0; i--) {
            let rows = "";
            
            // Add leading spaces
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

new Solution().pattern(3);