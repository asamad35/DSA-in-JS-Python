// function lengthOfLongestSubstring(s) {
//   let [start, end, ans] = [0, 0, 0];
//   let set = new Set();

//   if (s.length === 0) return ans;

//   while (end < s.length) {
//     if (set.has(s[end])) {
//       // end and start should be equal to find the next longest substring
//       while (s[start] !== s[end]) {
//         set.delete(s[start]);
//         start++;
//       }
//       set.delete(s[start]);
//       start++;
//       ans = Math.max(ans, end - start + 1);
//     } else {
//       set.add(s[end]);
//       ans = Math.max(ans, end - start + 1);
//       end++;
//     }
//   }
//   return ans;
// }

// console.log(lengthOfLongestSubstring("abcbacdefgh"));

var reverse = function (x) {
  let num = x < 0 ? -x : x;
  let ans = 0;
  let digit = 0;
  while (num > 0) {
    digit = num % 10;
    if (ans === 0 && digit === 0) {
      num = Math.floor(num / 10);
      continue;
    }
    ans = ans * 10 + digit;
    num = Math.floor(num / 10);
  }

  return ans;
};

console.log(reverse(1230));
