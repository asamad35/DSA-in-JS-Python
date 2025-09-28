/**
 * @param {number[]} piles - Array of banana piles
 * @param {number} h - Total hours Koko has to eat all bananas
 * @return {number} - Minimum integer speed (bananas/hour) Koko needs
 */

// Helper: given a speed, calculate total hours required to finish all piles
function calcHours(speed, piles) {
  let totalHours = 0;
  for (let i = 0; i < piles.length; i++) {
    // Divide pile size by speed; Math.ceil ensures remainder counts as an extra hour
    totalHours += Math.ceil(piles[i] / speed);
  }
  return totalHours;
}

var minEatingSpeed = function (piles, h) {
  // --- Upper Bound Discussion ---
  // Option A: totalBananas = sum of all bananas.
  //   -> Safe, but much larger search space.
  //   -> Worst-case upper bound = all bananas eaten in 1 hour.
  // const totalBananas = piles.reduce((sum, pile) => sum + pile, 0);
  // let end = totalBananas;
  //
  // Option B (optimized): maxPile = largest pile.
  //   -> Tighter and sufficient bound.
  //   -> Because Koko never needs to eat faster than the largest pile in 1 hour.
  let start = 1, end = Math.max(...piles);

  let minSpeed = end; // best feasible speed found so far

  // --- Binary Search ---
  while (start <= end) {
    const mid = Math.floor((start + end) / 2); // candidate speed
    const hoursTaken = calcHours(mid, piles);

    if (hoursTaken > h) {
      // Too slow: needs more hours than allowed
      start = mid + 1;
    } else {
      // Feasible: Koko can finish in time or faster
      // Try to lower the speed to see if a smaller one also works
      minSpeed = mid;
      end = mid - 1;
    }
  }

  return minSpeed;
};
