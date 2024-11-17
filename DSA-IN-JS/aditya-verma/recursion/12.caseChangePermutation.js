// Input-output method.
// If u have make decisions then create recursive tree
// Hence Create recursive tree.


function caseChangepermutation(input, output = '') {
  if (input === '') {
    console.log(output)
    return input
  }

  const output1 = output + input[0]
  const output2 = output + input[0].toUpperCase()
  const newInput = input.slice(1)

  caseChangepermutation(newInput, output1)
  caseChangepermutation(newInput, output2)
}


caseChangepermutation('ab')
