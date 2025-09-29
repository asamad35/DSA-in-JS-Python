/**
 * @param {number[]} weights - array of package weights
 * @param {number} days - number of days within which all packages must be shipped
 * @return {number} - minimum ship capacity to deliver within 'days'
 */

// Helper: Given a ship capacity, calculate how many days are needed
function calcDays(shipCapacity, containers) {
  let totalDays = 1;   // start with day 1
  let tempWeight = 0;  // track load for the current day

  for (let i = 0; i < containers.length; i++) {
    tempWeight += containers[i];

    // If adding current package exceeds ship capacity
    if (tempWeight > shipCapacity) {
      totalDays++;                 // need one more day
      tempWeight = containers[i];  // start new day with current package
    }
  }
  return totalDays;
}

var shipWithinDays = function (weights, days) {
  // --- Search Range for Binary Search ---
  // Lower bound = heaviest package (ship must at least carry this)
  let start = Math.max(...weights);

  // Upper bound = sum of all weights (ship carries everything in 1 day)
  let end = weights.reduce((acc, curr) => acc + curr, 0);

  let minCapacity = end; // store best feasible capacity

  // --- Binary Search for Minimum Capacity ---
  while (start <= end) {
    const shipCapacity = Math.floor((start + end) / 2); // mid = candidate capacity
    const daysTaken = calcDays(shipCapacity, weights);

    if (daysTaken > days) {
      // Too small -> takes too many days, need a larger capacity
      start = shipCapacity + 1;
    } else {
      // Feasible -> can ship within 'days', try smaller capacity
      minCapacity = shipCapacity;
      end = shipCapacity - 1;
    }
  }

  return minCapacity;
};
