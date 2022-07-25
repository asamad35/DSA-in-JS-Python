/*
 - Arrival and departure times of trains are given. Arrival and departure times are not of same trains (not bundled).

 - If current train arrival time is less than last train departure time, means we need 1 more platform to accomodate both the trains.
 - So we increment platformCount and moves to next arrival time.

 - If current train arrival time is more than last train departure time then it means last train has left the platform, hence that platform is vacant.
 - So we decrement platformCount and moves to next departure time.

 - store maxPlatoform at every iteration

 */

findPlatform(arr, dep, n);
{
  arr.sort((a, b) => a - b);
  dep.sort((a, b) => a - b);

  let platformCount = 1;
  let maxPlatform = 1;

  let arrNum = 1;
  let depNum = 0;

  while (arrNum < n && depNum < n) {
    if (dep[depNum] >= arr[arrNum]) {
      platformCount++;
      arrNum++;
    } else {
      platformCount--;
      depNum++;
    }
    maxPlatform = Math.max(maxPlatform, platformCount);
  }
  return maxPlatform;
}
