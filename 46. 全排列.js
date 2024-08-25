/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = [];
    const rItem = [];
    const used = new Array(nums.length).fill(false);
    const fn = () => {
        if (rItem.length === nums.length) {
            res.push([...rItem]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;
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