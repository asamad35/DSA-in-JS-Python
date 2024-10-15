/***
 * Question: Array: [1,10,3,10,2]
 * Every element resembles 1 flower, element value resembles on which day the flower will bloom.
 * m=3 , m resembles no of bouquets.
 * k=1 , k resembles no of flowers required per bouquet.
 * 
 * Naive approach:
 * Day ranges b/w 1 and max element value. 
 * In this case it's 1 to 10
 * 
 * ------------------------------------------------------------------------------------------------
 * Now we will create a function that will calculate if all bouquets can be created for provided day.
 * Example we can check for 3rd day.
 * If bouquet can be created. Then it will return which day, otherwise it will return Infinity.
 * Infinity means all bouquets cannot be created at the provided day.
 * ------------------------------------------------------------------------------------------------
 *  
 * We will run a loop for the day range, 1 to 10 in this case. Including last day because it can be a potential ans.
 * In the loop we will use our helper function calculate days.
 * we will store the minimum value from minDays and and calculatedDays result.
 * 
 * 
 * 
 * Optimal:
 * Helper function remains the same. 
 * We will replace our main loop with binary search.
 * Binary search range is same as 1st day to last day.
 * If calculatedDays is Infinity, then it means we need more days to make all bouquet. Hence: start=mid+1
 * Else we calc answer and reduce the days because we need to minimize the days taken. Hence: end=mid-1  
 * 
 */

function findDays(bloomDay, currentDay, m, k) {
  let possibleBouquets = 0;
  let consecutiveFlowers = 0

  for (let i = 0; i < bloomDay.length; i++) {
    if (bloomDay[i] <= currentDay) {
      consecutiveFlowers += 1
    }

    if (bloomDay[i] > currentDay || i === bloomDay.length - 1) {
      possibleBouquets += Math.floor(consecutiveFlowers / k)
      consecutiveFlowers = 0
    }
  }
  if (possibleBouquets < m) return Infinity
  return currentDay
}


var minDaysNaive = function (bloomDay, m, k) {
  let minDays = Infinity, lastDay = Math.max(...bloomDay);

  if (m * k > bloomDay.length) return -1

  for (let i = 1; i <= lastDay; i++) {
    const calculatedDays = findDays(bloomDay, i, m, k)
    minDays = Math.min(minDays, calculatedDays)
  }
  return minDays
};
// console.log(minDaysNaive([1000000000, 1000000000], 1, 1))

var minDaysOptimized = function (bloomDay, m, k) {
  let minDays = Infinity, lastDay = Math.max(...bloomDay);
  let start = 1, end = lastDay

  if (m * k > bloomDay.length) return -1

  while (start <= end) {
    const mid = Math.floor((start + end) / 2)

    const calculatedDays = findDays(bloomDay, mid, m, k)

    if (calculatedDays === Infinity) {
      start = mid + 1
    } else {
      minDays = Math.min(minDays, calculatedDays)
      end = mid - 1
    }
  }
  return minDays
};

console.log(minDaysOptimized([1, 10, 3, 10, 2], 3, 1))
