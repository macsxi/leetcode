/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const res = [];
    const heap = [];
    const cPush = (v) => {
        while (heap.length && v > heap[heap.length - 1]) {
            heap.pop();
        }
        heap.push(v);
    }
    for (let i = 0; i < k; i++) {
        cPush(nums[i]);
    }
    res.push(heap[0]);
    for (let i = k; i < nums.length; i++) {
        if (nums[i - k] === heap[0]) {
            heap.shift();
        }
        cPush(nums[i]);
        res.push(heap[0]);
    }
    return res;
};
