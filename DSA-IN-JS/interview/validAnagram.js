function validAnagram(originalStr, anagramStr) {
  if (originalStr.length !== anagramStr.length) return false

  const originalStrLowerCased = originalStr.toLowerCase()
  const anagramStrLowerCased = anagramStr.toLowerCase()

  const obj = {}

  for (let i = 0; i < originalStrLowerCased.length; i++) {
    obj[originalStrLowerCased[i]] = (obj[originalStrLowerCased[i]] || 0) + 1
    obj[anagramStrLowerCased[i]] = (obj[anagramStrLowerCased[i]] || 0) + 1
  }

  for (const property in obj) {
    if (obj[property] !== 2) return false
  }

  return true
}

console.log(validAnagram("silent", "listen"))