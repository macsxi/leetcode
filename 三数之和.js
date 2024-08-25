/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const res = [];
    if (nums[0] > 0 || nums.length < 3) return res;
    for (let i = 0; i < nums.length; i++) {
        let left = i + 1, right = nums.length - 1;
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        while (left < right) {
            const t = nums[i] + nums[left] + nums[right];
            if (t > 0) {
                right--;
            } else if (t < 0) {
                left++;
            } else {
                res.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[right] === nums[--right]);
                while (left < right && nums[left] === nums[++left]);
            }
        }
    }
    return res;
};