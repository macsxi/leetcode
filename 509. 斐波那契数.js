/**
 * @param {number} n
 * @return {number}
 */
// 递归
var fib = function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fib(n - 1) + fib(n - 2)
};

// 动态规划
var fib = function(n) {
    if (n < 2) return n;
    const arr = Array.from({length: n + 1});
    arr[0] = 0;
    arr[1] = 1;
    let res = 0;
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n];
};

// 动态规划
// 数组只需存储两个数即可
var fib = function(n) {
    if (n < 2) return n;
    const arr = [0, 1];
    let res = 0;
    for (let i = 2; i <= n; i++) {
        res = arr[0] + arr[1];
        arr[0] = arr[1];
        arr[1] = res;
    }
    return res;
};