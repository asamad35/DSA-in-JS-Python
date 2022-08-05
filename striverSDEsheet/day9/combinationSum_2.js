// - combinationSum_1 and subsets_2 mixture

var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  console.log(candidates);
  const ans = [];
  const len = candidates.length;

  function uniqueCombinations(index, tempArr, target) {
    if (target === 0) {
      ans.push([...tempArr]);
      return;
    }
    if (index === len || target < 0) return;

    //         picking el
    tempArr.push(candidates[index]);
    uniqueCombinations(index + 1, tempArr, target - candidates[index]);
    tempArr.pop();

    //         skipping el
    while (candidates[index] === candidates[index + 1]) index++;
    uniqueCombinations(index + 1, tempArr, target);
  }

  uniqueCombinations(0, [], target);

  return ans;
};
