/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        for (let j = i + 1; j < nums.length; j++) {
            let left = j + 1, right = nums.length - 1;
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;
            while (left < right) {
                const t = nums[i] + nums[j] + nums[left] + nums[right];
                if (t > target) {
                    right--;
                } else if (t < target) {
                    left++;
                } else {
                    res.push([nums[i], nums[j], nums[left], nums[right]]);
                    while (left < right && nums[right] === nums[--right]);
                    while (left < right && nums[left] === nums[++left]);
                }
            }
        }
    }
    return res;
};