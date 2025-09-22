
// Expand around a center (i,j) until it's no longer a palindrome
function expand(i, j, s) {
  // keep expanding while indices are valid and characters match
  while (i >= 0 && j < s.length) {
    if (s[i] === s[j]) {
      i--; // move left
      j++; // move right
    } else break; // stop if mismatch
  }
  // return the bounds of the palindrome found
  // note: after breaking, i and j are one step outside
  return [i + 1, j - 1];
}

var longestPalindrome = function (s) {
  const len = s.length;
  let i = 0;
  let maxLen = 0;   // length of the longest palindrome found so far
  let start = 0;    // starting index of the longest palindrome

  // edge case: single character or empty string
  if (len <= 1) return s;

  // try every index as a "center"
  while (i < len) {
    // odd-length palindrome (centered at i)
    const [oddStart, oddEnd] = expand(i, i, s);

    // even-length palindrome (centered between i and i+1)
    const [evenStart, evenEnd] = expand(i, i + 1, s);

    // check if odd palindrome is longer than current max
    if (oddEnd - oddStart + 1 > maxLen) {
      maxLen = oddEnd - oddStart + 1;
      start = oddStart;
    }

    // check if even palindrome is longer than current max
    if (evenEnd - evenStart + 1 > maxLen) {
      maxLen = evenEnd - evenStart + 1;
      start = evenStart;
    }

    i++; // move to next index
  }

  // slice out the longest palindrome substring
  return s.slice(start, start + maxLen);
};