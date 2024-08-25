/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const sArr = s.split('');
    const res = [];
    const rItem = [];
    const isPalindrome = (start, end) => {
        for (let i = start, j = end; i < j; i++, j--) {
            if (sArr[i] !== sArr[j]) {
                return false;
            }
        }
        return true;
    }
    const fn = startIndex => {
        if (startIndex >= sArr.length) {
            res.push([...rItem]);
            return;
        }
        for (let i = startIndex; i < sArr.length; i++) {
            if (isPalindrome(startIndex, i)) {
                rItem.push(s.substring(startIndex, i + 1));
            } else {
                continue;
            }
            fn(i + 1);
            rItem.pop();
        }
    }
    fn(0);
    return res;
};