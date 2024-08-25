/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
};

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let start = 0, end = nums.length - 1;
    while (start <= end) {
        if (nums[start] === val && nums[end] === val) {
            end--;
        } else if (nums[start] === val && nums[end] !== val) {
            nums[start++] = nums[end];
        } else {
            start++;
            end--;
        }
    }
    return end;
};