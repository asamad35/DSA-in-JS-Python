function validAnagram(string1, string2) {
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  const array1 = string1.split("");
  const array2 = string2.split("");

  if (array1.length !== array2.length) return false;

  for (let val of array1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of array2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let val of array1) {
    if (frequencyCounter1[val] !== frequencyCounter2[val]) return false;
  }
  return true;
}

console.log(validAnagram("haha", "ahaah"));
