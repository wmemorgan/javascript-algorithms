/**
 * Best Time to Buy and Sell Stock
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */

/**
 * @param {number[]} prices
 * @return {number}
 */

/*----NAIVE APPROACH----*/
// Initialize global variable to track maximum profit
// Iterate through array
// At each element
// Get net sale for each subsequent day
// Compare net with maxProfit and replace it if amount is higher

var maxProfit = function (prices) {
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    // console.log(`Trading day ${i} purchase stock at ${prices[i]}`)
    for (let j = i + 1; j < prices.length; j++) {
      let net = prices[j] - prices[i];
      // console.log(`\t trading day ${j} sold stock at ${prices[j]} for a profit of ${net}`)
      maxProfit = Math.max(maxProfit, net);
      // console.log(`Highest profit to date ${maxProfit}`)
    }
  }

  return maxProfit;
};

/*----OPTIMIZED APPROACH----*/
// Track lowest purchase price
// Track highest profit margin starting at 0
// Iterate through prices
	// Determine lowest purchase price
		// Assign today's price if none exists or if lower than previous price
		// Keep previous purchase price
	// Calculate the current net sale (today's price - lowest purchase price to date)
	// Compare today's net sale with highest profit margin
		// If net sale is higher assign it to highest profit margin if not leave alone
var maxProfit = function (prices) {
  let minPurchasePrice;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    minPurchasePrice = minPurchasePrice === undefined || prices[i] < minPurchasePrice ? prices[i] : minPurchasePrice;
    let netSale = prices[i] - minPurchasePrice;
    maxProfit = Math.max(maxProfit, netSale);
  }

  return maxProfit;
};

// const input = [7, 1, 5, 3, 6, 4];
//const input = [7, 6, 4, 3, 1];
const input = [2, 1, 2, 1, 0, 1, 2];
console.log(maxProfit(input));
