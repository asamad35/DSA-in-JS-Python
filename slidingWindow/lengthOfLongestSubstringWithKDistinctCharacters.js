function lengthOfLongestSubstringWithKDistinctCharacters(s, k) {
  let [start, end, ans] = [0, 0, 0];
  let uniqueChar = new Set();

  const obj = {};

  if (s.length < k) {
    return ans;
  }

  while (end < s.length) {
    obj[s[end]] = (obj[s[end]] || 0) + 1;
    uniqueChar.add(s[end]);

    if (Object.keys(obj).length > k) {
      while (Object.keys(obj).length !== k) {
        obj[s[start]]--;
        if (obj[s[start]] === 0) {
          delete obj[s[start]];
        }
        start++;
      }
    }
    ans = Math.max(ans, end - start + 1);
    end++;
  }
  return uniqueChar.size < k ? 0 : ans;
}

console.log(lengthOfLongestSubstringWithKDistinctCharacters("abacccccab", 2));
