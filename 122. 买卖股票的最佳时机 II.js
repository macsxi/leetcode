/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let sum = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        const cur = prices[i + 1] - prices[i];
        if (cur > 0) {
            sum += cur;
        }
    }
    return sum;
};