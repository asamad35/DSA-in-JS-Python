function minimumWindowSubstring(s, k) {
  let [start, end, count, ans] = [0, 0, 0, Infinity];
  let ansString = "";
  const obj = {};

  for (let i = 0; i < k.length; i++) {
    obj[k[i]] = (obj[k[i]] || 0) + 1;
  }
  count = Object.keys(obj).length;

  while (end < s.length) {
    if (count !== 0) {
      if (obj.hasOwnProperty(s[end])) {
        obj[s[end]]--;
      }
      if (obj[s[end]] === 0) {
        count--;
      }
      if (count !== 0) {
        end++;
      }
    }

    if (count === 0) {
      if (ans > Math.min(ans, end - start + 1)) {
        ans = Math.min(ans, end - start + 1);
        ansString = s.slice(start, end + 1);
      }
      if (obj.hasOwnProperty([s[start]])) {
        obj[s[start]]++;
      }
      if (obj[s[start]] == 1) {
        count++;
        end++;
        start++;
        continue;
      }

      start++;
      if (ans > Math.min(ans, end - start + 1)) {
        ans = Math.min(ans, end - start + 1);
        ansString = s.slice(start, end + 1);
      }
    }
  }

  return ans === Infinity ? "" : ansString;
}
console.log(minimumWindowSubstring("bba", "ba"));
