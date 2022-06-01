// function reverseString(s) {
//   if (s.length === 1) {
//     return s;
//   }

//   return reverseString(s.slice(1)) + s[0];
// }

function reverseString(s) {
  return s.reverse();
  const word = s.split("");
  return (reverseWord = word
    .map((alphabet, idx) => word[word.length - idx - 1])
    .join(""));
}

console.log(reverseString("abcd"));
