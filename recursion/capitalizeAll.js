let words = ["i", "am", "learning", "recursion"];

function capitalizeWords(words) {
  let arr = [];
  if (words.length === 1) return (arr = arr.concat(words[0].toUpperCase()));
  else {
    arr = [words[0].toUpperCase()].concat(capitalizeWords(words.slice(1)));
  }
  return arr;
}
console.log(capitalizeWords(words));
