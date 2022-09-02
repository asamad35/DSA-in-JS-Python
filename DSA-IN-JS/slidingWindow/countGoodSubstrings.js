// leetcode problem 1876

function countGoodSubstrings(s, k) {
  let [start, end, count, ans] = [0, 0, 0, 0];
  let obj = {};

  while (end < s.length) {
    //   calc
    if (!obj[s[end]]) {
      obj[s[end]] = (obj[s[end]] || 0) + 1;
      count++;
    } else {
      obj[s[end]]++;
    }
    // window
    if (end - start + 1 < k) {
      end++;
    } else if (end - start + 1 === k) {
      if (count === k) {
        ans++;
      }
      obj[s[start]]--;
      if (obj[s[start]] === 0) {
        delete obj[s[start]];
        count--;
      }
      start++;
      end++;
    }
  }
  return ans;
}

console.log(countGoodSubstrings("zabzz", 3));
