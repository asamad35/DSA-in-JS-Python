/***
 * Intuition: 
 * Once u get all the alphabets in substring, start reducing the size by reducing the substring.
 * Calculate ans in each iteration. 
 * 
 * When the required alphabet is removed, then start expanding untill u get it.
 * Then again follow the above step.
 */


var minWindow = function(s, t) {
  let start=0, end=0, count= t.length, obj={}, len = s.length, res = ""

  for(const alphabet of t){
      obj[alphabet] = (obj[alphabet] || 0) +1 
  }

  while(end<len){
      if(s[end] in obj){
          if(obj[s[end]] > 0) {
              count--
          }
          obj[s[end]]--
      }

      if(count===0){
          while(count ===0){
                if(s[start] in obj){
                      if(obj[s[start]] === 0) {
                          count++
                      }
                      obj[s[start]]++
                  }
          if(end-start+1 <= res.length || res === ""){
                  res = s.slice(start,end+1)
              }
              start++
          }
      }
      end++
  }
  return res
};