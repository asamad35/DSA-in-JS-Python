/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
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

console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3))