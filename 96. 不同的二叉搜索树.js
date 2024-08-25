/**
 * @param {number} n
 * @return {number}
 */
// 动态规划
var numTrees = function(n) {
    const dp = Array.from({ length: n + 1 }, () => 0);
    dp[0] = 1;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            dp[i] = dp[i] + dp[j - 1] * dp[i - j];
        }
    }
    return dp[n];
};

// 数学法
// 卡塔兰数 公式：F(0) = 1 && F(n + 1) = 2 * (2 * n + 1) / (n + 2) * F(n)
var numTrees = function(n) {
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res = res * (2 * (2 * i + 1) / (i + 2))
    }
    return res;
};