function lengthOfLongestSubstring(s) {
  let [start, end, ans] = [0, 0, 0];
  let set = new Set();

  if (s.length === 0) return ans;

  while (end < s.length) {
    if (set.has(s[end])) {
      // end and start should be equal to find the next longest substring
      while (s[start] !== s[end]) {
        set.delete(s[start]);
        start++;
      }
      set.delete(s[start]);
      start++;
      ans = Math.max(ans, end - start + 1);
    } else {
      set.add(s[end]);
      ans = Math.max(ans, end - start + 1);
      end++;
    }
  }
  return ans;
}

console.log(lengthOfLongestSubstring("abcbacdefgh"));
