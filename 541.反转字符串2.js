/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverseStrByIndex = (s, startIndex, endIndex) => {
    return s.slice(0, startIndex) + s.slice(startIndex, endIndex + 1).split('').reverse().join('') + s.slice(endIndex + 1);
}
var reverseStr = function(s, k) {
    const len = s.length;
    for (let i = 0; i < len; i += (2 * k)) {
        if (len - i <= k) {
            let t = s.slice(i);
            s = reverseStrByIndex(s, i, len - 1);
        } else {
            s = reverseStrByIndex(s, i, i + k - 1);
        }
    }
    return s;
};