/*
- firstly sort the arr inorder of dscending ratio of value/wieght.
- After that in a loop check if full value can be inserted in knapsack. If yes insert full value.
- Else insert partial value calculated by unitary methods.
*/

fractionalKnapsack(W, arr, n);
{
  let knapsackWeight = 0;
  let knapsackValue = 0;
  // sorting according to value/weight ratio
  arr.sort((a, b) => b.value / b.weight - a.value / a.weight);

  for (let i = 0; i < arr.length; i++) {
    // if full wieght can be inserted in knapsack
    if (arr[i].weight <= W - knapsackWeight) {
      knapsackValue += arr[i].value;
      knapsackWeight += arr[i].weight;
    }
    // if partial weight can be inserted in knapsack
    else {
      const remainingKnapsackWeight = W - knapsackWeight;
      const fractionalKnapsackValue =
        (arr[i].value / arr[i].weight) * remainingKnapsackWeight;
      knapsackValue += fractionalKnapsackValue;
      knapsackWeight += remainingKnapsackWeight;
    }
  }

  return knapsackValue;
}
