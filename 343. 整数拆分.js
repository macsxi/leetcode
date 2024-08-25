/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    const m = {
        2: 1,
        3: 2,
        4: 4,
        5: 6,
        6: 9
    }
    if (n <= 6) return m[n]
    const i = n % 3;
    if (i === 1) {
        return Math.pow(3, Math.floor(n / 3) - 1) * 4; 
    } else if (i === 0) {
        return Math.pow(3, Math.floor(n / 3));
    }
    return Math.pow(3, Math.floor(n / 3)) * i;
};

// 数学方法，贪心思想
var integerBreak = function(n) {
    if (n === 2) return 1;
    if (n === 3) return 2;
    if (n === 4) return 4;
    let res = 1;
    while (n > 4) {
        res *= 3;
        n -= 3;
    }
    return res * n;
};

// 动态规划
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    const dp = Array.from({ length: n + 1 }, () => 0);
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= i - 1; j++) {
            dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
        }
    }
    return dp[n];
};