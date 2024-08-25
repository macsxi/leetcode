/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const res = [];
    const item = [];
    let count = 0;
    const f = startIndex => {
        if (count > n) return;
        if (item.length === k) {
            count === n && res.push([...item]);
            return;
        }
        const len = 9 - (k - item.length) + 1;
        for (let i = startIndex; i <= len; i++) {
            item.push(i);
            count += i;
            f(i + 1);
            item.pop();
            count -= i;
        }
    }
    f(1);
    return res;
};