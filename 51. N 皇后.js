/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const res = [];
    const rItem = [];
    const usedCol = Array.from({length: n}, () => false);
    const position = [];
    const isCanUse = (row, col) => {
        for (let j = 0; j < position.length; j++) {
            const [x, y] = position[j];
            if (Math.abs(row - x) === Math.abs(col - y)) {
                return false;
            }
        }
        return true;
    }
    const backtracking = (rowIndex) => {
        if (rowIndex === n) {
            rItem.length === n && res.push([...rItem]);
            return;
        }
        for (let i = 0; i < n; i++) {
            if (usedCol[i]) {
                continue;
            }
            if (position.length === 0 || isCanUse(rowIndex, i)) {
                rItem.push(Array.from({length: n}, (v, k) => {
                    if (k === i) return 'Q';
                    return '.';
                }).join(''));
                position.push([rowIndex, i])
            } else {
                continue;
            }
            usedCol[i] = true;
            backtracking(rowIndex + 1);
            usedCol[i] = false;
            rItem.pop();
            position.pop();
        }
    }
    backtracking(0);
    return res;
};