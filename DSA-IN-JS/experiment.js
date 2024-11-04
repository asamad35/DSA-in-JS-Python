/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
  let end =0, lastOccurence = [-1,-1,-1] , res = 0, len= s.length

  while(end<len){

    switch(s[end]){
        case 'a': 
            lastOccurence[0]=end
            break
        case 'b': 
            lastOccurence[1]=end
            break
        case 'c': 
            lastOccurence[2]=end
            break
    }

    if(lastOccurence.every((el)=> el>-1)){
        const smallestIndex = Math.min(...lastOccurence)
        res += smallestIndex+1
    }
    end++
  }
  return res
};


console.log(numberOfSubstrings('abca'))