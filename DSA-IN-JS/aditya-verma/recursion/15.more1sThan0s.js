// we have choices to add 1 or 0, hence recursion will be used.
// Input output method.

function solve(input, count, output) {
  if (input === 0) {
    console.log(output)
    return
  }

  // 1 will always be added.
  const newCount1 = {
    ...count,
    ones: count.ones + 1,
  }
  const newInput1 = input - 1
  const newOutput1 = output + '1'
  solve(newInput1, newCount1, newOutput1)

  // 0 will be added if one's count is more than zeroe's count
  if (count.ones > count.zeroes) {
    const newCount2 = {
      ...count,
      zeroes: count.zeroes + 1,
    }
    const newInput2 = input - 1
    const newOutput2 = output + '0'
    solve(newInput2, newCount2, newOutput2)
  }
}


function more1sThan0s(n) {
  const count = {
    ones: 0,
    zeroes: 0
  }
  solve(n, count, '')
}

more1sThan0s(3)