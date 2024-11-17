function solve(input, output = "", res) {
  if (input === '') {
    res.push(output);
    return
  }
  if (!isNaN(Number(input[0]))) {
    const outputWithNum = output + input[0]
    solve(input.slice(1), outputWithNum, res)
    return
  }

  const output1 = output + input[0].toLowerCase()
  const output2 = output + input[0].toUpperCase()

  solve(input.slice(1), output1, res)
  solve(input.slice(1), output2, res)

  return res
}
var letterCasePermutation = function (s) {
  const res = []
  solve(s, '', res)

  return res
};

console.log(letterCasePermutation('a1b2'))