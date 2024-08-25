/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const sArr = s.split('');
    let startIndex = 0;
    let maxLen = 1;
    let l = 0, r = 0;
    for (let i = 0; i < sArr.length; i++) {
        l = i;
        r = i;
        while (l - 1 >= 0 && sArr[l - 1] === sArr[i]) {
            l--;
        }
        while (r + 1 < sArr.length && sArr[r + 1] === sArr[i]) {
            r++;
        }
        while (l - 1 >= 0 && r + 1 < sArr.length && sArr[l - 1] === sArr[r + 1]) {
            l--;
            r++;
        }
        if (r - l + 1 > maxLen && l >= 0) {
            startIndex = l;
            maxLen = r - l + 1;
        }
    }
    return sArr.slice(startIndex, startIndex + maxLen).join('');
};