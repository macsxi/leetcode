/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    const res = [];
    const rItem = [];
    const isRepeat = (startIndex, index) => {
        for (let i = startIndex; i < index; i++) {
            if (nums[i] === nums[index]) {
                return true;
            }
        }
        return false;
    }
    const fn = startIndex => {
        if (rItem.length >= 2) {
            res.push([...rItem]);
        }
        for (let i = startIndex; i < nums.length; i++) {
            if ((i > startIndex && nums[i] === nums[i - 1]) || isRepeat(startIndex, i)) {
                continue;
            }
            if (rItem.length === 0) {
                rItem.push(nums[i]);
            } else if (nums[i] >= rItem[rItem.length - 1]) {
                rItem.push(nums[i]);
            } else {
                continue;
            }
            fn(i + 1);
            rItem.pop();
        }
    }
    fn(0);
    return res;
};