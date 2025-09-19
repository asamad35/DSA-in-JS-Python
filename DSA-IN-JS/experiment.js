function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const map = new Map();

  for (let i = 0; i < str1.length; i++) {
    map.set(str1[i], (map.get(str1[i]) || 0) + 1)
    map.set(str2[i], (map.get(str2[i]) || 0) + 1)
  }

  for (let [key, value] of map) {
    if (value % 2 !== 0) return false
  }
  return true
}
console.log(validAnagram('abcd', 'dcabb'))