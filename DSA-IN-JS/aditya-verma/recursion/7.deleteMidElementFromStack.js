// shift element, check if it is equal to mid element, if yes return,
// Otherwise call solve function again. And put the popped element back, after it is solved.

function deleteMiddleElement(stack) {
  const midElement = stack[Math.floor((stack.length) / 2)];

  solve(stack, midElement)
  return stack
}


function solve(stack, element) {
  const firstElement = stack.shift();
  if (firstElement === element) return
  solve(stack, element)
  stack.unshift(firstElement);
}

console.log(deleteMiddleElement([1, 2, 3, 4, 5, 6]))