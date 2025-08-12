function lengthOfLongestSubstringWithKDistinctCharacters(s, k) {
  // Initialize pointers for sliding window and result variable
  let [start, end, res] = [0, 0, 0];

  // Object to store frequency count of characters in current window
  let obj = {}

  // Iterate over the string with 'end' pointer expanding the window
  while (end < s.length) {
    // Add current character at 'end' to frequency map or increment count
    obj[s[end]] = (obj[s[end]] || 0) + 1;

    // If number of distinct characters exceeds k, shrink window from the left
    while (Object.keys(obj).length > k) {
      // Decrease count of character at 'start' pointer
      obj[s[start]] = obj[s[start]] - 1;

      // If count goes to zero, remove the character from the map
      if (obj[s[start]] === 0) delete obj[s[start]];

      // Move start pointer to the right to shrink the window
      start++
    }

    // If window has exactly k distinct characters,
    // update the maximum length found so far
    if (Object.keys(obj).length === k)
      res = Math.max(res, end - start + 1);

    // Expand window by moving 'end' pointer to the right
    end++
  }

  // Return the length of the longest substring with k distinct characters
  return res
}


console.log(lengthOfLongestSubstringWithKDistinctCharacters("eceba", 2));
// Expected output: 3 ("ece" or "ceba" contains 2 distinct chars, longest is "ece")

console.log(lengthOfLongestSubstringWithKDistinctCharacters("aa", 1));
// Expected output: 2 ("aa" contains 1 distinct char, entire string)

console.log(lengthOfLongestSubstringWithKDistinctCharacters("aabbcc", 1));
// Expected output: 2 ("aa", "bb", or "cc")

console.log(lengthOfLongestSubstringWithKDistinctCharacters("aabbcc", 2));
// Expected output: 4 ("aabb" or "bbcc")

console.log(lengthOfLongestSubstringWithKDistinctCharacters("aabbcc", 3));
// Expected output: 6 (whole string)

console.log(lengthOfLongestSubstringWithKDistinctCharacters("abcadcacacaca", 3));
// Expected output: 11 ("cadcacacaca")

console.log(lengthOfLongestSubstringWithKDistinctCharacters("", 2));
// Expected output: 0 (empty string edge case)

console.log(lengthOfLongestSubstringWithKDistinctCharacters("abc", 0));
// Expected output: 0 (k=0 means no characters allowed)

