// Same as sortArray

function sortStack(stack) {
  if (stack.length === 1) return

  const firstElement = stack.shift()
  sortStack(stack);
  insertStack(stack, firstElement);
  return stack
}

function insertStack(stack, element) {
  if (stack.length === 0 || stack[0] >= element) {
    stack.unshift(element);
    return
  }

  const firstElement = stack.shift()
  insertStack(stack, element);
  stack.unshift(firstElement);
}

console.log(sortStack([2, 0, 4, -1]))