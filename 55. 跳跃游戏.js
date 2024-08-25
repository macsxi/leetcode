/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if (nums.length <= 1) return true;
    let end = 0;
    for (let i = 0; i <= end; i++) {
        end = Math.max(end, i + nums[i]);
        if (end >= nums.length - 1) return true;
    }
    return false;
};