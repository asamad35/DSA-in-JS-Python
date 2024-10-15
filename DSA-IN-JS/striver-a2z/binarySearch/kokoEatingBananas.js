/** *
 * NAIVE APPROACH
 * EdgeCase: If all bananas are less than no of hours, then koko can eat at its slowest, that is 1 bnanana per hour.
 * Intuition: To minimize the eating speed we need to maximize the number of hours.
 * For this we can run a loop from 1 to no of bananas. 
 * For each loop we can calculate no of hours taken by koko to eat all the bananas. 
 * If no of hours is less than or equal to provided hours. Then we update the result.
*/

function calculateHours(noOfBanana, piles, h) {
  let totalHours = 0
  for (let i = 0; i < piles.length; i++) {
    const q = Math.floor(piles[i] / noOfBanana)
    const r = piles[i] % noOfBanana
    if (q > 0) {
      totalHours += q
    }
    if (q === 0 || r > 0) {
      totalHours += 1
    }


    if (totalHours > h) return Infinity
  }

  return totalHours;
}

var minEatingSpeedNaive = function (piles, h) {
  let minBanana = Infinity;
  const totalBananas = piles.reduce((acc, curr) => acc + curr, 0)

  if (totalBananas < h) return 1

  for (let i = 1; i < totalBananas; i++) {
    const hoursTaken = calculateHours(i, piles, h)
    if (hoursTaken <= h) {
      minBanana = Math.min(i, minBanana)
    }
  }

  return minBanana
};

// to optimized this, just replace linear with binary search.
var minEatingSpeedOptimized = function (piles, h) {
  const totalBananas = piles.reduce((acc, curr) => acc + curr, 0)
  let start = 1, end = totalBananas, minBanana = Infinity;
  if (totalBananas < h) return 1

  while (start <= end) {
    const mid = Math.floor((start + end) / 2)
    const hoursTaken = calculateHours(mid, piles, h)
    if (hoursTaken > h) {
      start = mid + 1
    } else if (hoursTaken <= h) {
      minBanana = Math.min(mid, minBanana)
      end = mid - 1
    }
  }
  return minBanana
};


console.log(minEatingSpeedOptimized([30, 11, 23, 4, 20], 6))