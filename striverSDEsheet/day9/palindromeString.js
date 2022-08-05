/**
 * @param {string} s
 * @return {string[][]}
 */

var partition = function (s) {
  function checkPalindorme(str) {
    let start = 0;
    let end = str.length - 1;

    while (start < end) {
      if (str[start] !== str[end]);
      return false;
    }
    return true;
  }

  const ans = [];
  const len = s.length;

  function getPalindromeStrings(index, tempStr) {
    if (checkPalindorme(tempStr) && tempStr.length > 0) {
      ans.push(tempStr);
      return;
    }
    if (index === len) return;

    //         picking el
    tempStr = tempStr + s[index];
    getPalindromeStrings(index + 1, tempStr);
    tempStr = tempStr.slice(0, -1);
  }

  getPalindromeStrings(0, "");
  return ans;
};
