function longestSubstringWithUniqueChars(str) {
  let start = 0, end = 0, allUnique = true, obj = {}, res = 0

  while (end < str.length) {
    obj[str[end]] = (obj[str[end]] || 0) + 1

    if (obj[str[end]] > 1) {
      allUnique = false
    }

    if (allUnique === false) {
      while (allUnique === false) {
        obj[str[start]] = obj[str[start]] - 1
        if (obj[str[start]] === 1) allUnique = true
        if (obj[str[start]] === 0) delete obj[str[start]]
        start++
      }
    }
    if (allUnique === true) {
      res = Math.max(end - start + 1, res)
    }

    end++;
  }
  return res
}


console.log(longestSubstringWithUniqueChars('pwwkewaedwp'))