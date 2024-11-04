
/***
 * Question is we need to maximize the sum for K entries, but the caveat is we can only pick contnuously from either start or end.
 * We simply take all elements from start.
 * Then take 1 element from end and other elements from start.
 * Then take 2 element from end and other elements from start.
 * This goes on untill we take all the elements from end.
 * 
 * In each iteration we calculate the sum and store the maxSum in res.
 * Time complexity: O(k^2)
 */
var maxScoreNaive = function (cardPoints, k) {
  let res = 0, len = cardPoints.length

  for (let left = k; left >= 0; left--) {
    let tempSum = 0

    for (let i = 0; i < left; i++) {
      tempSum += cardPoints[i]
    }

    for (let i = len - 1; i > len - (k - left) - 1; i--) {
      tempSum += cardPoints[i]
    }

    res = Math.max(res, tempSum)
  }

  return res
};


/***
 * Here we simply calculate the leftSum for K. While rightSum is 0.
 * Now we subtract the elements from leftSum and Add elements to rightSum, util the left sum is 0.
 * And with every iteration we calculate maxSum = rightSum + left sum.
 */

var maxScoreOptimized = function (cardPoints, k) {
  let res = 0, leftSum = 0, rightSum = 0, rightIndex = cardPoints.length - 1

  for (let left = 0; left < k; left++) {
    leftSum += cardPoints[left];
  }
  res = leftSum

  for (let i = k - 1; i >= 0; i--) {
    leftSum -= cardPoints[i];
    rightSum += cardPoints[rightIndex]
    rightIndex--

    res = Math.max(res, leftSum + rightSum)
  }

  return res

};
