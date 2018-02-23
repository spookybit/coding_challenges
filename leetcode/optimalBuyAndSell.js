// Say you have an array for which the ith element is the price of a given stock on day i.
//
// Design an algorithm to find the maximum profit. You may complete at most k transactions.
//
// Note:
// You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
//


var maxProfit = function(k, prices) {
    if (prices.length <= 1 || k <= 0) {
        return 0;
    }
    let profit = 0;
    let start = prices[0]
    let profitLogs = [];
    for (let i = 1; i < prices.length; i++) {
        let total = prices[i] - start;
        if (total < 0) {
            start = prices[i];
            if (profit > 0) {profitLogs.push(profit);}
            profit = 0;
        } else if (i === prices.length - 1) {
          profit = Math.max(total, profit);
          profitLogs.push(profit);
        } else if (total > profit) {
            profit = total;
        }
    }
    if (profitLogs.length === 0) {
        return 0;
    }

    k = Math.min(k, profitLogs.length);

    profitLogs = profitLogs.sort(function(x,y){return y-x}).slice(0,k);
    total = profitLogs.reduce(function(acc, num) {return acc + num})

    return total;
};
