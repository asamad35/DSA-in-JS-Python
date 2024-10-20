/***
 * Question: We are given an strictly inc array and we need to find the Kth missing integer.
 * Example: [2,3,4,7,11] and k=5
 * Answer: missing array:[1,5,6,8,9,10,12,13......] 9 is at 5th position. Hence 9 is answer
 * 
 * Naive approach.
 * Get all the missing elements. 
 * Return the last element.
*/
// var findKthPositiveNaive = function (arr, k) {
//   const misisngArr = [];
//   const max = Math.max(...arr)
//   let j = 0

//   for (let i = 1; i <= max; i++) {
//     if (i < arr[j]) {
//       misisngArr.push(i)
//       if (misisngArr.length === k) return misisngArr[misisngArr.length - 1]
//     } else {
//       j++
//     }
//   }

//   const noOfElRequired = k - misisngArr.length
//   for (let i = 1; i <= noOfElRequired; i++) {
//     misisngArr.push(max + i)
//   }

//   return misisngArr[misisngArr.length - 1]
// };


// console.log(findKthPositiveNaive([1, 3, 4], 5))

/***
 * Observe: arr[index] - (index+1) returns number for elements missing upto that index.
 * This happens because: suppose [1,2,3,4,5] at 2nd index value is 3, 2-(2+1) =0, No missing elements.
 * If element was missing then 3 wont be at 2nd index, it would before 2nd index.
 * Kitna pehle hota? That depends on missing count.
 * Example: [3,4,5]
 * At 0th index, 3 is present. Which means 1,2 are missing. 
 * So missingCount = 3 -(0+1) = 2
 * 
 * We uses this concept for binary search. 
 * If missing count is less than k , then we need more missing numbers, hence start = mid+1
 * Else we need less missing number, hence end = mid-1;
 * We keep doing this until start <=end is true. 
 * Once loop is over. 
 * We have high and low crossed each other. 
 * Now in the range of high to low, we find our answer by doing some calculations. 
 */

var findKthPositiveOptimized = function (arr, k) {
  let start = 0, end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2)
    const missingCount = arr[mid] - (mid + 1);
    if (missingCount < k) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  // we are not using below because end can be a negative number. arr[end] will give NaN
  // const missingCountAtEndPointer = arr[end] - (end + 1)
  // const remainingMissingCount = k - missingCountAtEndPointer
  // const answer = arr[end] + remainingMissingCount

  // If u observe, if we put everything into a single equation arr[end] will cancel.
  // const ans = arr[end] + ( k- [arr[end] -(end +1)]) 
  //           = k + end +1 

  return k + end + 1;
};

console.log(findKthPositiveOptimized([3, 10], 2))
