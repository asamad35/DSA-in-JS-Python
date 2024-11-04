/***
 * This is a different question than 2 pointers or sliding window.
 * 
 * We store index of latest a,b,c.
 * Once we get index of a,b and c then it is a valid Substring. 
 * And all the combination before the minimum index out of our a,b,c  are valid.
 * 
 * Example bbabc:
 *              _ _ a b c : Here we get all a,b,c latest index. Index of "a" is minimum. 
 * Now "abc" is valid,
 * Also "babc" is valid,
 * Also "bbabc" is valid. 
 * This is what i meant by thi line
 * 
 * Dry run on this "abcabc"
 */
var numberOfSubstrings = function (s) {
  let end = 0, lastOccurence = [-1, -1, -1], res = 0, len = s.length

  while (end < len) {

    switch (s[end]) {
      case 'a':
        lastOccurence[0] = end
        break
      case 'b':
        lastOccurence[1] = end
        break
      case 'c':
        lastOccurence[2] = end
        break
    }

    if (lastOccurence.every((el) => el > -1)) {
      const smallestIndex = Math.min(...lastOccurence)
      res += smallestIndex + 1
    }
    end++
  }
  return res
};


console.log(numberOfSubstrings('abca'))