function isPalindrome(word) {
  if (word.length <= 2 && word[0] === word.slice(-1)) return true;

  if (word[0] !== word.slice(-1)) return false;
  else {
    return isPalindrome(word.slice(1, -1));
  }
}

console.log(isPalindrome("ddodd"));

// without recursion
/*
function isPalindrome(word) {
  const length = word.length;
  let start = 0;
  let end = length - 1;

  while (end > start) {
    if (word[start] !== word[end]) return false;
    end--;
    start++;
  }
  return true;
}

console.log(isPalindrome("aaa"));
*/
