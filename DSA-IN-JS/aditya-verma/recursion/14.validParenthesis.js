
function solve(output, brackets) {
  if (brackets.open === 0 && brackets.close === 0) {
    console.log(output)
    return
  }


  // When we create recursive tree, we always have bracket open choice.
  if (brackets.open > 0) {
    const newOutput1 = output + '('
    const newBracket1 = {
      ...brackets,
      open: brackets.open - 1
    }
    solve(newOutput1, newBracket1);
  }

  // But we only have bracket close choice when bracketOpen is less than bracketClose
  if (brackets.open < brackets.close) {
    const newOutput2 = output + ')'
    const newBracket2 = {
      ...brackets,
      close: brackets.close - 1
    }
    solve(newOutput2, newBracket2);
  }

}




function validParenthesis(n) {
  const brackets = {
    open: n,
    close: n
  }
  solve('', brackets);
}

validParenthesis(4)
