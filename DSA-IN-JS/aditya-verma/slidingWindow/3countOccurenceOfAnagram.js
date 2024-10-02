/**
 * Make a map of alphabets and their frequency.
 * Make a count vairable and will initialize it with number of alphabets.
 * Create two pointers start and end.
 * Move end pointer and update the alphabets map. 
 * Means reduce the frequency of arr[end] if presnt in map.
 * if frequency arr[end] is 0. Then update the count variable, i.e decrement it. 
 * When the window size is achieved, check for ans, i.e count === 0; If yes increment the ans.
 * Now move the window, and update count variable and alphabets map
 */

function countAnagrams(str, anagram) {
  let result = 0, start = 0, end = 0;
  const windowSize = anagram.length
  const alphabetsMap = {}

  for (let char of anagram) {
    alphabetsMap[char] = (alphabetsMap[char] || 0) + 1
  }
  let count = Object.keys(alphabetsMap).length

  while (end < str.length) {
    if (str[end] in alphabetsMap) {
      alphabetsMap[str[end]]--;
      if (alphabetsMap[str[end]] === 0) {
        count--;
      }
    }

    if (end - start + 1 < windowSize) { end++ }
    else {
      if (count === 0) { result++ }
      if (str[start] in alphabetsMap) {
        alphabetsMap[str[start]]++;
        if (alphabetsMap[str[start]] === 1) {
          count++;
        }
      }
      start++
      end++

    }

  }
  return result

}


console.log(countAnagrams('aabaabaa', 'aaba'))