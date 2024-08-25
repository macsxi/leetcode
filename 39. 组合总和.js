/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res = [];
    const rItem = [];
    let count = 0;
    const fn = startIndex => {
        if (count >= target) {
            count === target && res.push([...rItem]);
            return;
        }
        for (let i = startIndex; i < candidates.length; i++) {
            const t = candidates[i];
            rItem.push(t);
            count += t;
            fn(i);
            rItem.pop();
            count -= t;
        }
    }
    fn(0);
    return res;
};

// 剪枝优化后
var combinationSum = function(candidates, target) {
    const res = [];
    const rItem = [];
    let count = 0;
    candidates = candidates.sort((a, b) => b - a)
    const fn = startIndex => {
        if (count >= target) {
            count === target && res.push([...rItem]);
            return;
        }
        for (let i = startIndex; i < candidates.length && count + candidates[i] <= target; i++) {
            const t = candidates[i];
            rItem.push(t);
            count += t;
            fn(i);
            rItem.pop();
            count -= t;
        }
    }
    fn(0);
    return res;
};