/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const res = [];
    const rItem = [];
    nums = nums.sort((a, b) => a - b);
    const fn = startIndex => {
        res.push([...rItem]);
        for (let i = startIndex; i < nums.length; i++) {
            if (i > startIndex && nums[i] === nums[i - 1]) {
                continue;
            }
            rItem.push(nums[i]);
            fn(i + 1);
            rItem.pop();
        }
    }
    fn(0);
    return res;
};

// 解法2
var subsetsWithDup = function(nums) {
    const res = [];
    const rItem = [];
    const _nums = nums.sort((a, b) => a - b);
    const used = Array.from({length: nums.length}).fill(false);
    const fn = startIndex => {
        res.push([...rItem]);
        for (let i = startIndex; i < _nums.length; i++) {
            if (i && _nums[i] === _nums[i - 1] && !used[i - 1]) {
                continue;
            }
            rItem.push(_nums[i]);
            used[i] = true;
            fn(i + 1);
            used[i] = false;
            rItem.pop();
        }
    }
    fn(0);
    return res;
};