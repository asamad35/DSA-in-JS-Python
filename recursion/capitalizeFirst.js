let words = ["i", "am", "learning", "recursion"];

function capitalizeFirst(words) {
  let arr = [];
  if (words.length === 1)
    return (arr = arr.concat(words[0][0].toUpperCase() + words[0].slice(1)));
  else {
    arr = [words[0][0].toUpperCase() + words[0].slice(1)].concat(
      capitalizeFirst(words.slice(1))
    );
  }
  return arr;
}
console.log(capitalizeFirst(words));
