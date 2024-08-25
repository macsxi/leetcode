/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const dSMap = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }
    const res = [];
    let item = [];
    const dArr = digits.split('');
    let allSize = dArr.length;
    const fn = index => {
        if (item.length === allSize) {
            item.length && res.push(item.join(''));
            return;
        }
        const n = dArr[index];
        const l = dSMap[n].split('');
        for (let i = 0; i < l.length; i++) {
            item.push(l[i]);
            fn(index + 1);
            item.pop();
        }
    }
    fn(0);
    return res;
};