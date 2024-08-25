/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let res = 0;
    let cur = 0;
    let next = 0;
    if (nums.length === 1) return 0;
    for (let i = 0; i < nums.length; i++) {
        next = Math.max(nums[i] + i, next);
        if (i === cur) {
            if (cur !== nums.length - 1) {
                res++;
                cur = next;
                if (next >= nums.length - 1) break;
            } else {
                break;
            }
        }
    }
    return res;
};

// 解法2
var jump = function(nums) {
    let res = 0;
    let cur = 0;
    let next = 0;
    if (nums.length === 1) return 0;
    for (let i = 0; i < nums.length - 1; i++) {
        next = Math.max(nums[i] + i, next);
        if (i === cur) {
            res++;
            cur = next;
        }
    }
    return res; 
};