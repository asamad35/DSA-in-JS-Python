//  striver

// - at each tree depth we need to find the position of first and second partition.
// - base case is when we exceed last index of string.

var partition = function (s) {
  function checkPalindorme(start, end) {
    while (start <= end) {
      if (s[start] !== s[end]) return false;

      start++;
      end--;
    }
    return true;
  }

  const ans = [];
  const len = s.length;

  function getPalindromeStrings(index, tempArr) {
    //- base case when string is completely travsersed.

    if (index === len) {
      ans.push([...tempArr]);
      return;
    }

    // - loop over the current substring to find the palindrome substring of the current substring at each recursion call.
    for (let i = index; i < len; i++) {
      // -push in tempArr if the subString is palindrome (substring is a part of S from "index to i+1").
      if (checkPalindorme(index, i)) {
        tempArr.push(s.slice(index, i + 1));

        // - call recursive function from i+1 (because index to i+1 is already a palindrome substring) to find the next subString.
        getPalindromeStrings(i + 1, tempArr);

        // - pop out for backtracking
        tempArr.pop();
      }
    }
  }

  getPalindromeStrings(0, []);
  return ans;
};
