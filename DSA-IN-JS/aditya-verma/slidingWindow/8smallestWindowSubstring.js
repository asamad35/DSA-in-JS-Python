
/***
 * First we store the frequency of string T in an object. 
 * Then initialize count = number of keys in object.
 * Now we loop over the S string.
 * Check if s[end] is present in obj. Yes, decrement the frequency. If frequency becomes 0, it means we have the desired frequency of this particular character in window.
 * Decrement the count.
 * Repeat this till, count becomes 0.
 * 
 * If count is 0, 
 * Run a loop 
 * To keep calculating ans while reducing the window size from start. Since we need the minimum window size.
 * Also update the obj and count vairable.
 */


function smallestWindowSubstring(s, t) {
  let start = 0, end = 0, count = 0, objT = {}, objS = {}, res = Infinity, i, j

  // initialize count
  for (char of t) {
    objT[char] = (objT[char] || 0) + 1
  }
  count = Object.keys(objT).length

  // check for edgecase
  for (char of s) {
    objS[char] = (objS[char] || 0) + 1
  }
  for (char of t) {
    if (objT[char] > objS[char]) return ""
  }

  // Main logic
  while (end < s.length) {
    if (s[end] in objT) {
      objT[s[end]] = objT[s[end]] - 1
      if (objT[s[end]] === 0) count--
    }

    if (count === 0) {
      while (count === 0) {
        // update result
        if (end - start + 1 < res) {
          res = end - start + 1
          i = start, j = end
        }
        if (s[start] in objT) {
          objT[s[start]] = objT[s[start]] + 1
          if (objT[s[start]] > 0) count++
        }
        start++
      }
    }

    end++
  }
  return s.slice(i, j + 1)
}

console.log(smallestWindowSubstring('aa', 'aaaaa'))