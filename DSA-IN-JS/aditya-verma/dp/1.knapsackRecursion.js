// Below I have made choices on the first element, like how we create the tree.
// But if make choices on the last element, then it will be more efficient since we can use instead of slicing it every time.

function knapsackOriginal(wt, val, knapsakcWeight) {
  if (wt.length === 0 || knapsakcWeight === 0) {
    return 0
  }

  if (wt[0] <= knapsakcWeight) {

    // dont pick wt[0]
    const res1 = knapsackOriginal(wt.slice(1), val.slice(1), knapsakcWeight);

    // pick wt[0]
    const res2 = val[0] + knapsackOriginal(wt.slice(1), val.slice(1), knapsakcWeight - wt[0]);

    return Math.max(res1, res2)
  }
  else {
    return knapsackOriginal(wt.slice(1), val.slice(1), knapsakcWeight);
  }
}



function knapsackOptimized(wt, val, knapsakcWeight, n) {

  // base case, if length of weight array or knapsack max weight is 0 then max weight will be 0.
  if (n === 0 || knapsakcWeight === 0) {
    return 0
  }

  if (wt[n - 1] <= knapsakcWeight) {
    // dont pick wt[n-1]
    const res1 = knapsackOptimized(wt, val, knapsakcWeight, n - 1);

    // pick wt[n-1]
    const res2 = val[n - 1] + knapsackOptimized(wt, val, knapsakcWeight - wt[n - 1], n - 1);

    return Math.max(res1, res2)
  }
  else {
    return knapsackOptimized(wt, val, knapsakcWeight, n - 1);
  }
}


function main() {
  const weight = [1, 3, 4, 5]
  const value = [11, 4, 5, 7]
  const knapsakcWeight = 7
  console.log(knapsackOptimized(weight, value, knapsakcWeight, weight.length))
  console.log(knapsackOriginal(weight, value, knapsakcWeight, weight.length))
}


main()