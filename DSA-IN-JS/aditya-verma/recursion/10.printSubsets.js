// Input-output method.
// If u have make decisions then create recursive tree
// Hence Create recursive tree.

function printSubsets(input, output = "") {
  if (input === '') {
    console.log(output);
    return
  }

  printSubsets(input.slice(1), output + input[0])
  printSubsets(input.slice(1), output)
}


printSubsets('ab')