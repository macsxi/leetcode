/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// 动态规划
var uniquePaths = function(m, n) {
    const dp = Array.from({length: n}, (v, k) => {
        if (k === 0) {
            return Array.from({length: m}, () => 1);
        }
        return Array.from({length: m}, (v2, k2) => k2 === 0 ? 1 : 0);
    });
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[n - 1][m - 1]
};
// 动态规划, 优化空间复杂度
var uniquePaths = function(m, n) {
    const dp = Array.from({length: n}, () => 1);
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[j] += dp[j - 1];
        }
    }
    return dp[n - 1];
};

// 数论方法
/**
 * 再 m * n的网格中，无论怎么走，走到终点都需要m + n - 2步，其中一定有m - 1步是向下走的，不管什么时候走
 * 所以此问题可以转化为，给定m + n - 2个不同的数，随便取m - 1个数，有几种取法
 */
var uniquePaths = function(m, n) {
    let a = 1;
    let d = m - 1;
    let c = m - 1;
    let t = m + n - 2;
    while (c--) {
        a *= t--;
        while (d !== 0 && a % d === 0) {
            a /= d;
            d--;
        }
    }
    return a;
};

// 深度优先搜索
/**
 * 每次只能向右或者向下，可转化为一棵二叉树，路径条数即为求叶子节点个数
 */
var uniquePaths = function(m, n) {
    const dfs = (i, j) => {
        if (i > n || j > m) return 0;
        if (i === n && j === m) return 1;
        return dfs(i + 1, j) + dfs(i, j + 1);
    }
    return dfs(1, 1);
};