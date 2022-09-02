function countAnagrams(string, anagram) {
  let [start, end, anagramCount, count] = [0, 0, 0, 0];
  const obj = {};
  const k = anagram.length;

  for (let i = 0; i < k; i++) {
    obj[anagram[i]] = (obj[anagram[i]] || 0) + 1;
  }

  count = Object.keys(obj).length;

  while (end < string.length) {
    // logic
    if (obj[string[end]] !== undefined) {
      obj[string[end]]--;

      if (obj[string[end]] === 0) {
        count--;
      }
    }

    // loop till window size
    if (end - start + 1 < k) {
      end++;
    } else if (end - start + 1 === k) {
      if (count === 0) {
        anagramCount++;
      }
      if (obj[string[start]] !== undefined) {
        obj[string[start]]++;

        if (obj[string[start]] === 1) {
          count++;
        }
      }

      end++;
      start++;
    }
  }
  console.log(anagramCount);
}

countAnagrams("aaaaa", "a");
