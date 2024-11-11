//Similar to previous questions
function reverseStack(stack) {
  if (stack.length === 1) return

  const firstElement = stack.shift()
  reverseStack(stack)
  insertStack(stack, firstElement)

  return stack
}

function insertStack(stack, element) {
  if (stack.length === 0) {
    stack.unshift(element);
    return
  }

  const firstElement = stack.shift();
  insertStack(stack, element);
  stack.unshift(firstElement)

}


console.log(reverseStack([1, 2, 3, 0, 4, 5, 6]))