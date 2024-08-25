/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const res = [];
    const ri = [];
    const f = (startIndex) => {
        if (ri.length === k) {
            res.push([...ri]);
            return;
        }
        /**
         * ri.length 为当前已选择的元素个数
         * k - ri.length 为还需要的元素个数
         * n - (k - ri.length) + 1 为最多要从该位置开始遍历(包含起始位置，所以需要+1)
         */
        for (let i = startIndex; i <= (n - (k - ri.length) + 1); i++) {
            ri.push(i);
            f(i + 1);
            ri.pop();
        }
    }
    f(1);
    return res;
};