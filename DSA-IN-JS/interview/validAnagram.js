function validAnagram(originalStr, anagramStr) {
  if (originalStr.length !== anagramStr.length) return false
  const originalStrLowerCased = originalStr.toLowerCase()
  const anagramStrLowerCased = anagramStr.toLowerCase();

  const obj = {};

  for (let i = 0; i < originalStr; i++) {
    obj[originalStrLowerCased[i]] = (obj[originalStrLowerCased] || 0) + 1
    obj[anagramStrLowerCased[i]] = (obj[anagramStrLowerCased] || 0) + 1
  }

  for (const key in obj) {
    if (obj[key] % 2 !== 0) return false;
  }
  return true
}



console.log(validAnagram("ssilent", "slisaten"))