function isSubSequence(str1, str2) {
  let j = 0;

  for (let i = 0; i < str2.length; i++) {
    if (str1[j] === str2[i] && str1.length > j) {
      j++;
    }
  }

  if (j === str1.length) return true;

  return false;
}

console.log(isSubSequence("abc", "acb"));
