/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 3) return n;
    const dp = [2, 3];
    let res = 0;
    for (let i = 4; i <= n; i++) {
        res = dp[0] + dp[1];
        dp[0] = dp[1];
        dp[1] = res;
    }
    return res;
};