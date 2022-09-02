/* 
- we need to get sum of all the possible combinations.
- It can be achieved if we form a recursion tree.

- At each recursive call we are creating two cases. Either pick or skip that element. 
- By doing this all the cases will be covered.

*/

function subsetSums(arr, n) {
  const subsetSumArr = [];

  function getAllSubsetSums(index, sum, arr) {
    // edge case if we cross the array boundary push sum.
    if (index === n) {
      subsetSumArr.push(sum);
      return;
    }

    //   pick the element
    getAllSubsetSums(index + 1, sum + arr[index], arr);

    //  skip element
    getAllSubsetSums(index + 1, sum, arr);
  }

  getAllSubsetSums(0, 0, arr);

  subsetSumArr.sort((a, b) => a - b);

  return subsetSumArr;
}
