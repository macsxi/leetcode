/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let slow = 0, sum = 0, len = Number.MAX_SAFE_INTEGER;
    for (i = 0; i < nums.length; i++) {
        sum += nums[i];
        while (sum >= target) {
            len = Math.min(len, i - slow + 1);
            sum -= nums[slow++];
        }
    }
    return len === Number.MAX_SAFE_INTEGER ? 0 : len;
};

var generateMatrix = function(n) {
    let x = 0, y = 0, s = 1, count = 1;
    let arr = Array.from({length: n}, i => Array.from({length: n}));
    let i, j;
    while (n > s) {
        i = x, j = y;
        for (j = y; j < y + n - s; j++) {
            arr[i][j] = count++;
        }
        for (i = x; i < x + n -s; i++) {
            arr[i][j] = count++;
        }
        for (; j > y; j--) {
            arr[i][j] = count++;
        }
        for (; i > x; i--) {
            arr[i][j] = count++;
        }
        s += 2;
        x++;
        y++;
    }
    if (n % 2 === 1) {
        const mid = Math.floor(n / 2);
        arr[mid][mid] = count;
    }
    return arr;
};