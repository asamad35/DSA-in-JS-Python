
function subsetSumRecursion(arr, sum, n) {

  //// base cases

  // if sum is 0 then {} empty set is always possible
  if (sum === 0) return true
  // If array is empty and sum isn't zero (checked above) then subset cannot be created.
  if (n === 0) return false

  if (arr[n - 1] <= sum) {
    // dont pickup last element
    const res1 = subsetSumRecursion(arr, sum, n - 1)

    // pickup last element
    const res2 = subsetSumRecursion(arr, sum - arr[n - 1], n - 1)

    const finalRes = res1 || res2
    return finalRes
  } else {
    return subsetSumRecursion(arr, sum, n - 1)
  }
}

function main() {
  const arr = [2, 3, 7, 8, 10]
  const sum = 11
  const len = arr.length

  console.log(subsetSumRecursion(arr, sum, len))
}

main()