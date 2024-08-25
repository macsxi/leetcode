/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const res = [];
    const rItem = [];
    const used = Array.from({length: nums.length}, () => false);
    nums = nums.sort((a, b) => a - b);
    const fn = () => {
        if (rItem.length === nums.length) {
            res.push([...rItem]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if ((i && nums[i] === nums[i - 1] && !used[i - 1]) || used[i]) {
                continue;
            }
            rItem.push(nums[i]);
            used[i] = true;
            fn();
            rItem.pop();
            used[i] = false;
        }
    }
    fn();
    return res;
};