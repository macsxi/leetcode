/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// 解法1
var combinationSum2 = function(candidates, target) {
    const res = [];
    const rItem = [];
    let count = 0;
    candidates = candidates.sort((a, b) => a - b);
    const used = Array.from({length: candidates.length}).fill(false);
    const fn = startIndex => {
        if (count >= target) {
            if (count === target) {
                res.push([...rItem]);
            }
            return;
        }
        for (let i = startIndex; i < candidates.length && count + candidates[i] <= target; i++) {
            if (i && candidates[i] === candidates[i - 1] && !used[i - 1]) {
                continue;
            }
            const t = candidates[i];
            rItem.push(t);
            count += t;
            used[i] = true;
            fn(i + 1);
            rItem.pop();
            count -= t;
            used[i] = false;
        }
    }
    fn(0);
    return res;
};
// 解法2
var combinationSum2 = function(candidates, target) {
    const res = [];
    const rItem = [];
    let count = 0;
    candidates = candidates.sort((a, b) => a - b);
    const fn = startIndex => {
        if (count >= target) {
            if (count === target) {
                res.push([...rItem]);
            }
            return;
        }
        for (let i = startIndex; i < candidates.length && count + candidates[i] <= target; i++) {
            if (i > startIndex && candidates[i] === candidates[i - 1]) {
                continue;
            }
            const t = candidates[i];
            rItem.push(t);
            count += t;
            fn(i + 1);
            rItem.pop();
            count -= t;
        }
    }
    fn(0);
    return res;
};