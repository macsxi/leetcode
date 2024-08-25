/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    if (s.length < 2) return s;
    let left = 0, right = s.length - 1;
    while (left < right) {
        const t = s[left];
        s[left++] = s[right];
        s[right--] = t;
    }
};