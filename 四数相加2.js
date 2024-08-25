/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    const pre = new Map();
    const after = new Map();
    let count = 0;
    for (let i of nums1) {
        for (let j of nums2) {
            pre.set(i + j, (pre.get(i + j) || 0) + 1)
        }
    }
    for (let i of nums3) {
        for (let j of nums4) {
            if (pre.get(0 - (i + j)) !== undefined) {
                count += pre.get(0 - (i + j));
            }
        }
    }
    return count;
};