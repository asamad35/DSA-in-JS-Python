/**
 * @param {string} s
 * @return {boolean}
 *
 * Problem: Given a string of brackets '()[]{}',
 *          return true if every opening bracket
 *          has a matching closing bracket in correct order.
 *
 * Approach:
 *   - Use a stack (LIFO).
 *   - Push opening brackets when seen.
 *   - On closing brackets:
 *       * If stack is empty → invalid.
 *       * Check if top of stack matches the closing bracket.
 *         If not → invalid.
 *       * Otherwise pop the stack.
 *   - At the end, the stack must be empty → valid.
 */
var isValid = function (s) {
  // Early exit: odd length string can’t be valid
  if (s.length % 2 !== 0) return false;

  const stack = [];
  const openBrackets = '({['; // for quick lookup

  // Traverse each character
  for (let i = 0; i < s.length; i++) {
    // Case 1: Opening bracket → push to stack
    if (openBrackets.includes(s[i])) {
      stack.push(s[i]);
    }
    // Case 2: Closing bracket → check stack
    else {
      const topBracket = stack[stack.length - 1];

      // Mismatch cases → invalid immediately
      if (s[i] === ")" && topBracket !== "(") return false;
      if (s[i] === "}" && topBracket !== "{") return false;
      if (s[i] === "]" && topBracket !== "[") return false;

      // Valid match → pop from stack
      stack.pop();
    }
  }

  // At the end, stack must be empty (all opens matched)
  return stack.length === 0;
};
