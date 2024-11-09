/***
 * Hypothesis Induction Base Theorem steps.
 * 
 * 1) Assume that the function does something for "n". So it will do the same for "n-1".
 * 2) Write the logic of induction.
 * 3) Think of the smallest input, then think of its result. 
 */


function oneToN(n, arr) {

  // Step 3
  if (n === 1) {
    arr.push(1)
    return arr
  }

  // step 1
  oneToN(n - 1, arr)
  
  // step 2
  arr.push(n)
  return arr
}


console.log(oneToN(2, []))