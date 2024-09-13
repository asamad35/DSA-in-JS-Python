

function validAnagramApproach1(str) {
  const alphabets = {}

  for (const alphabet of str) {
    if (alphabet === " ") continue
    alphabets[alphabet.toLowerCase()] = true
  }
  const totalAlphabets = Object.keys(alphabets).length
  return totalAlphabets === 26
}


function validAnagramApproach2(str) {
  const alphabetsArray = Array(26).fill(false)

  for (const alphabet of str) {
    const lowerCaseAlphabet = alphabet.toLowerCase()

    if (lowerCaseAlphabet >= "a" && lowerCaseAlphabet <= "z") {
      const index = lowerCaseAlphabet.charCodeAt(0) - "a".charCodeAt(0)
      alphabetsArray[index] = true
    }
  }
  for (const alphabet of alphabetsArray) {
    if (alphabet === false) return false
  }
  return true

}


const myString = "The quick brown fox jumps over the lazy dog"
// console.log(validAnagramApproach1(myString))
console.log(validAnagramApproach2(myString))