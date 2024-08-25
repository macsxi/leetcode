/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    const isValid = (row, col, v) => {
        if (board[row].findIndex(j => j === v) >= 0) {
            return false;
        }
        for (let j = 0; j < board.length; j++) {
            if (board[j][col] === v) {
                return false;
            }
        }
        const startRow = Math.floor(row / 3) * 3;
        const startCol = Math.floor(col / 3) * 3;
        for (let m = startRow; m < startRow + 3; m++) {
            for (let n = startCol; n < startCol + 3; n++) {
                if (board[m][n] === v) {
                    return false;
                }
            }
        }
        return true;
    }
    const backtracking = () => {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] !== '.') continue;
                for (let m = 1; m < 10; m++) {
                    if (isValid(i, j, m + '')) {
                        board[i][j] = m + '';
                        if (backtracking()) return true;
                        board[i][j] = '.'
                    }
                }
                return false;
            }
        }
        return true;
    }
    backtracking();
};
