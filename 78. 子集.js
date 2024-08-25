/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const res = [];
    const rItem = [];
    const fn = (startIndex) => {
        res.push([...rItem]);
        // 终止条件可以不加，startIndex >= num.length时，循环也已结束
        if (startIndex >= nums.length) {
            return;
        }
        for (let i = startIndex; i < nums.length; i++) {
            rItem.push(nums[i]);
            fn(i + 1);
            rItem.pop();
        }
    }
    fn(0);
    return res;
};