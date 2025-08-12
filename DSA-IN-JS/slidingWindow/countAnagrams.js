


function countAnagrams(str, anagram) {
  // Initialize pointers and counters
  let [start, end, count, anagramCount] = [0, 0, 0, 0];

  // Create frequency map for characters in the anagram
  const obj = {};
  for (let i = 0; i < anagram.length; i++) {
    obj[anagram[i]] = (obj[anagram[i]] || 0) + 1;
  }

  // 'count' tracks how many unique characters in anagram need to be matched
  count = Object.keys(obj).length;

  // Length of the anagram (window size)
  const k = anagram.length;

  // Sliding window over the input string
  while (end < str.length) {
    // If current end character is part of anagram, decrement its count in map
    if (str[end] in obj) {
      obj[str[end]]--;
    }

    // If character count hits zero, one unique char fully matched → reduce count
    if (obj[str[end]] === 0) {
      count--;
    }

    // If window size is smaller than k, just expand window by moving 'end'
    if (end - start + 1 < k) {
      end++;
    }
    // When window size reaches k, check if it is an anagram and slide window
    else if (end - start + 1 === k) {
      // If all unique chars matched, increment total anagram count
      if (count === 0) anagramCount++;

      // Before sliding window, add back the char at 'start' to map
      if (str[start] in obj) obj[str[start]]++;

      // If after adding back char count goes from 0 to 1, increment unmatched count
      if (obj[str[start]] === 1) count++;

      // Slide the window forward by moving both pointers
      start++;
      end++;
    }
  }

  // Return total number of anagram substrings found
  return anagramCount;
}
console.log(countAnagrams("aaaaa", "a"));
// Expected output: 5

console.log(countAnagrams("cbaebabacd", "abc"));
// Expected output: 2

console.log(countAnagrams("abcdefg", "hij"));
// Expected output: 0

console.log(countAnagrams("listen", "silent"));
// Expected output: 1

console.log(countAnagrams("abab", "ab"));
// Expected output: 3

console.log(countAnagrams("abcabcabc", "abc"));
// Expected output: 7

console.log(countAnagrams("bcaacba", "abc"));
// Expected output: 3

console.log(countAnagrams("xyyxxy", "xy"));
// Expected output: 3
