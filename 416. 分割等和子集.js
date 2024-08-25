/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const sum = nums.reduce((pre, cur) => pre + cur);
    if (sum % 2 === 1) return false;
    const target = sum / 2;
    const dp = Array.from({ length: 10001 }, () => 0);
    for (let i = 0; i < nums.length; i++) {
        for (let j = target; j >= nums[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
        }
        if (dp[target] === target) return true;
    }
    return false;
};