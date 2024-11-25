// Below I have made choices on the first element, like how we create the tree.
// But if make choices on the last element, then it will be more efficient since we can use instead of slicing it every time.

function knapsackOriginal(wt, val, w) {
  if (wt.length === 0 || w === 0) {
    return 0
  }

  if (wt[0] <= w) {

    // dont pick w[0]
    const res1 = knapsackOriginal(wt.slice(1), val.slice(1), w);

    // pick w[0]
    const res2 = val[0] + knapsackOriginal(wt.slice(1), val.slice(1), w - wt[0]);

    return Math.max(res1, res2)
  }
  else {
    return knapsackOriginal(wt.slice(1), val.slice(1), w);
  }
}



function knapsackOptimized(wt, val, w, n) {
  if (n === 0 || w === 0) {
    return 0
  }

  if (wt[n - 1] <= w) {
    // dont pick w[n-1]
    const res1 = knapsackOptimized(wt, val, w, n - 1);

    // pick w[n-1]
    const res2 = val[n - 1] + knapsackOptimized(wt, val, w - wt[n - 1], n - 1);

    return Math.max(res1, res2)
  }
  else {
    return knapsackOptimized(wt, val, w, n - 1);
  }
}


function main() {
  const weight = [1, 3, 4, 5]
  const value = [11, 4, 5, 7]
  const knapsakcWeight = 7
  console.log(knapsackOptimized(weight, value, knapsakcWeight, weight.length))
}


main()