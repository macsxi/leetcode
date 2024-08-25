/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let startX = 0, startY = 0;
    let arr = Array.from({length: n}, i => Array.from({length: n}));
    let loop = Math.floor(n / 2);
    const mid = Math.floor(n / 2);
    let count = 1;
    let offset = 1;
    let i, j;
    while (loop --) {
        i = startX, 
        j = startY;
        for (j = startY; j < startY + n - offset; j++) {
            arr[startX][j] = count++;
        }
        for (i = startX; i < startX + n - offset; i++) {
            arr[i][j] = count++;
        }
        for (; j > startY; j--) {
            arr[i][j] = count++;
        }
        for (; i > startX; i--) {
            arr[i][j] = count++;
        }
        startX++;
        startY++;
        offset += 2;
    }
    if (n % 2) {
        arr[mid][mid] = count;
    }
    return arr;
};


