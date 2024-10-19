/***
 * Question: We are given an strictly inc array and we need to find the Kth missing integer.
 * Example: [2,3,4,7,11] and k=5
 * Answer: missing array:[1,5,6,8,9,10,12,13......] 9 is at 5th position. Hence 9 is answer
 * 
 * Naive approach.
 * Get all the missing elements. 
 * Return the last element.
*/
var findKthPositiveNaive = function (arr, k) {
  const misisngArr = [];
  const max = Math.max(...arr)
  let j = 0

  for (let i = 1; i <= max; i++) {
    if (i < arr[j]) {
      misisngArr.push(i)
      if (misisngArr.length === k) return misisngArr[misisngArr.length - 1]
    } else {
      j++
    }
  }

  const noOfElRequired = k - misisngArr.length
  for (let i = 1; i <= noOfElRequired; i++) {
    misisngArr.push(max + i)
  }

  return misisngArr[misisngArr.length - 1]
};


console.log(findKthPositiveNaive([1, 3, 4], 5))