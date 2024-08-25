/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    let res = 0;
    let pre = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            res++;
        } else {
            const c = nums[i] - nums[i - 1];
            if (c === 0) {
                continue;
            }
            if ((pre === 0) || (pre > 0 && c < 0) || (pre < 0 && c > 0)) {
                pre = c;
                res++;
            } else {
                continue;
            }
        }
    }
    return res;
};