/**
 * Create an object to store the count of characters. 
 * Create a count variable to store count of unique characters.
 * Run a loop
 *    Check if character is already present in object.
 *    If yes, increment its frequency, if no increment both count and frequency.
 *    
 *    Now check if count > k. 
 *    if yes slide the window and remove the starting character from object untill k<= count.
 *    Then decrement the count variable and increment the end.
 *     
 *    Check if count === k, calc ans and increment end
 * 
 *    Check if count < k, only increment end.
 *    
 */

function longestSubstringWithKUniqueCharacters(str, k) {
  let start = 0, end = 0, res = 0, count = 0, obj = {}

  // edge case 
  for (const char of str) {
    obj[char] = (obj[char] || 0) + 1
  }
  if (Object.keys(obj).length < k) return -1

  obj = {}

  while (end < str.length) {
    // calulations
    if (!(str[end] in obj)) {
      count++
    }
    obj[str[end]] = (obj[str[end]] || 0) + 1

    // conditions
    if (count > k) {
      while (count > k) {
        obj[str[start]] = obj[str[start]] - 1
        if (obj[str[start]] === 0) {
          delete obj[str[start]]
          count--
        }
        start++
      }
      end++
    } else if (count === k) {
      res = Math.max(end - start + 1, res)
      end++
    } else {
      end++
    }
  }
  return res
}


console.log(longestSubstringWithKUniqueCharacters('aabacbebebe', 5))