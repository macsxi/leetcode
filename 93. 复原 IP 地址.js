/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const res = [];
    const rItem = [];
    const isValid = (start, end) => {
        const t = s.substring(start, end + 1);
        if ((t.length > 1 && t.substring(0, 1) == 0) || Number(t) < 0 || Number(t) > 255) {
            return false;
        }
        return true;
    }
    const fn = (startIndex) => {
        if (startIndex >= s.length) {
            rItem.length === 4 && res.push(rItem.join('.'));
            return;
        }
        if (rItem.length === 3 && !isValid(startIndex, s.length - 1)) {
            return;
        }
        for (let i = startIndex; i < s.length - (4 - rItem.length) + 1; i++) {
            if (isValid(startIndex, i)) {
                rItem.push(s.substring(startIndex, i + 1))
            } else {
                break;
            }
            fn(i + 1);
            rItem.pop();
        }
    }
    fn(0);
    return res;
};