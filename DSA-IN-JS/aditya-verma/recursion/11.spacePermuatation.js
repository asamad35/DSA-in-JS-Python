// Input-output method.
// If u have make decisions then create recursive tree
// Hence Create recursive tree.

function solve(output, input) {
  if (input === '') {
    console.log(output)
    return
  }

  const output1 = output + '_' + input[0]
  const output2 = output + input[0]
  const newInput = input.slice(1)

  solve(output1, newInput)
  solve(output2, newInput)
  return
}


function spacePermuatation(str) {

  // we dont want make decision from first character, hence create recursive tree from 2nd character.
  const output = str[0];
  const input = str.slice(1)

  solve(output, input)
}

spacePermuatation('abc')