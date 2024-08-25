/**
 * @param {number[]} height
 * @return {number}
 */
// 双指针
var trap = function (height) {
    let left = 0, right = 0;
    let res = 0;
    if (height.length < 3) return res;
    for (let i = 1; i < height.length - 1; i++) {
        if (height[i] >= height[left]) {
            left = i;
        } else {
            right = i + 1;
            for (let j = right + 1; j < height.length; j++) {
                if (height[j] > height[right]) {
                    right = j;
                }
            }
        }
        if (height[left] > height[i] && height[right] > height[i]) {
            let s = Math.min(height[left], height[right]);
            res += (s - height[i]);
        }
    }
    return res;
};

// 动态规划
var trap = function (height) {
    const maxLeft = [];
    const maxRight = [];
    maxLeft[0] = height[0];
    const len = height.length;
    for (let i = 1; i < len; i++) {
        maxLeft[i] = Math.max(height[i], maxLeft[i - 1]);
    }
    maxRight[len - 1] = height[len - 1];
    for (let i = len - 2; i >= 0; i--) {
        maxRight[i] = Math.max(height[i], maxRight[i + 1]);
    }
    let res = 0;
    for (let i = 0; i < len; i++) {
        const c = Math.min(maxLeft[i], maxRight[i]) - height[i];
        if (c > 0) res += c;
    }
    return res;
};

// 单调栈
var trap = function (height) {
    const t = [];
    t.push(0);
    let res = 0;
    for (let i = 1; i < height.length; i++) {
        // if (height[i] < top) {
        //     t.push(i);
        // } else if (height[i] === top) {
        //     t.pop();
        //     t.push(i);
        // } else {
        while (t.length && height[i] > height[t[t.length - 1]]) {
            const mid = t.pop();
            if (t.length) {
                const h = Math.min(height[i], height[t[t.length - 1]]) - height[mid];
                const w = i - t[t.length - 1] - 1;
                res += h * w;
            }
        }
        t.push(i);
        // }
    }
    return res;
};