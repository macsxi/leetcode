/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    const n = obstacleGrid.length;
    const m = obstacleGrid[0].length;
    let dp = Array.from({ length: n }, () => {
        return Array.from({ length: m }, () => 0);
    });
    for (let i = 0; i < m; i++) {
        if ((i === 0 || dp[0][i - 1] !== 0) && obstacleGrid[0][i] === 0) {
            dp[0][i] = 1;
        }
    }
    for (let j = 0; j < n; j++) {
        if ((j === 0 || dp[j - 1][0] !== 0) && obstacleGrid[j][0] === 0) {
            dp[j][0] = 1;
        }
    }
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if (obstacleGrid[i][j] === 0) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
    }
    return dp[n - 1][m - 1];
};

// 优化代码逻辑，初始化数组时，只要遇到obstacleGrid数组对应位置不为0，则结束for循环，因为后面的位置无法到达了
var uniquePathsWithObstacles = function (obstacleGrid) {
    const n = obstacleGrid.length;
    const m = obstacleGrid[0].length;
    let dp = Array.from({ length: n }, () => {
        return Array.from({ length: m }, () => 0);
    });
    for (let i = 0; i < m && obstacleGrid[0][i] === 0; i++) {
        dp[0][i] = 1;
    }
    for (let j = 0; j < n && obstacleGrid[j][0] === 0; j++) {
        dp[j][0] = 1;
    }
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if (obstacleGrid[i][j] === 0) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
    }
    return dp[n - 1][m - 1];
};