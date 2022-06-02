function lengthOfLongestSubstring(str) {
  const obj = {};
  let ans = 0;
  let [start, end] = [0, 0];

  while (end < str.length) {
    // insert in obj
    obj[str[end]] = (obj[str[end]] || 0) + 1;

    // check if count is 2
    // If yes, move start pointer to the index where the obj[str[end]] becomes 1
    if (obj[str[end]] === 2) {
      while (obj[str[end]] === 2) {
        obj[str[start]]--;
        start++;
      }
    }
    // calc ans
    ans = Math.max(ans, end - start + 1);
    end++;
  }

  return ans;
}

console.log(lengthOfLongestSubstring("abcbacdefghabcdefghijklmnopqrstuvwxyz"));

// Another way of coding
/*
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
*/
