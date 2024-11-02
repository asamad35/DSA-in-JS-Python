
/**
 * https://leetcode.com/problems/longest-repeating-character-replacement/
 * 
 * Intuition: 
 *      1. In a substring characters required to be replaced in order to make the whole substring from a single characgter
 *         = length of substring - no of maxOccuring character.
 *      2. Hence, Swaps required  = length of substring - no of maxOccuring character.
 *      3. Now create a sliding window, and check if swaps required is more than k. 
 *      4. If yes start++, and do the corresponding calculation.
 *      5. Else, calc ans and end++.
 * 
 *      For eg: ABABA
 *      Here Swaps required  = 5 - 3 (no of most occuring character, in this case it is A).
 *                           = 2  
 *       
 */


var characterReplacement = function(s, k) {
  let start=0, end =0, maxOccurence = 0, obj={}, res=0;
  const len = s.length
  
  while(end<len){
      obj[s[end]] = (obj[s[end]] || 0) +1;
      maxOccurence = Math.max(maxOccurence, obj[s[end]]);

      let swapsRequired = (end-start+1) - maxOccurence
      if(swapsRequired>k){
          while(swapsRequired>k){
              obj[s[start]]--;
              maxOccurence = updatedMaxOccurence(obj);
              start++;
              swapsRequired = (end-start+1) - maxOccurence
              
          }
      }
      res = Math.max(res, end-start+1)
      end++;
  }
  return res
};

function updatedMaxOccurence(obj){
  let maxOccurence = 0;

  for (const key in obj){
      maxOccurence = Math.max(obj[key],maxOccurence);
  }

  return maxOccurence
}

console.log(characterReplacement("AABABBA", 1))