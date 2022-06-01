var maxProfit = function (arr) {
  let [buyPrice, profit] = [0, -Infinity];
  for (let i = 0; i < arr.length; i++) {
    buyPrice = Math.min(arr[i], buyPrice);
    profit = Math.max(profit, arr[i] - buyPrice);
  }
  return profit;
};

console.log(maxProfit([7, 6, 10, 1, 2]));
