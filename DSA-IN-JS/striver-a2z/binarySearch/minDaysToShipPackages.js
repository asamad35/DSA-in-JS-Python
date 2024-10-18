/***
 * This is also similar to previous questions of aditya verma binary search
 * The question statement was bit tricky, hence it took me some-time to understand first.
 * The question states that, we need to load the ship with the box on conveyer in provided number of days.
 * We will pick the boxes in order, means we cant pick from middle of array.
 * We need to minimize the number of load on ship for the provided days. Which implies that ship should take as little box as possible per day.
 */

function findDaysForWeight(weight, weights) {
  let totalDays = 0, remainingSpace = 0;
  for (let i = 0; i < weights.length; i++) {
    if (weights[i] > weight) return Infinity
    if (weights[i] <= remainingSpace) {
      remainingSpace -= weights[i]
    }
    else if (weights[i] <= weight) {
      totalDays += 1;
      remainingSpace = weight - weights[i]
    }
  }
  return totalDays
}

var shipWithinDays = function (weights, days) {
  let start = 1; end = weights.reduce((acc, curr) => acc + curr, 0)
  let res = Infinity
  while (start <= end) {
    const mid = Math.floor((start + end) / 2)
    const calcDays = findDaysForWeight(mid, weights)
    if (calcDays > days) {
      start = mid + 1
    }
    else {
      end = mid - 1;
      res = Math.min(res, mid)
    }
  }
  return res
};


console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5))