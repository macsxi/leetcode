/**
 * @param {number[]} cost
 * @return {number}
 */
// 动态规划
var minCostClimbingStairs = function(cost) {
    /**
     * 默认第一步不花费费用，爬到楼顶相当于求爬到cost.length下标的楼梯，所以i <= cost.length
     */
    const dp = [0, 0];
    for (let i = 2; i <= cost.length; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    }
    return dp[dp.length - 1]
};

// 动态规划，优化空间复杂度
var minCostClimbingStairs = function(cost) {
    const dp = [0, 0];
    let res = 0;
    for (let i = 2; i <= cost.length; i++) {
        res = Math.min(dp[1] + cost[i - 1], dp[0] + cost[i - 2]);
        dp[0] = dp[1];
        dp[1] = res;
    }
    return res;
};

/**
 * 若默认第一步要花费费用，则代码如下
 */
var minCostClimbingStairs = function(cost) {
    const dp = [cost[0], cost[1]];
    let res = 0;
    for (let i = 2; i < cost.length; i++) {
        res = Math.min(dp[1], dp[0]) + cost[i];
        dp[0] = dp[1];
        dp[1] = res;
    }
    return Math.min(dp[1], dp[0]);
};
