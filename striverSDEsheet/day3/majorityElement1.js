//  naive o(n) s(n)
/*
var majorityElement = function(nums) {
    let obj = {};
    
    for(let i=0; i<nums.length ; i++){
    obj[nums[i]] = (obj[nums[i]]||0)+1;
        if(obj[nums[i]]> ~~nums.length/2)
            return nums[i];
    }
};
*/

// s(1)

// boyer moore voting algorithm
var majorityElement = function (nums) {
  let count = 0;
  let el;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      el = nums[i];
    }
    if (el === nums[i]) {
      count++;
    } else count--;
  }
  return el;
};

console.log(majorityElement([4, 1, 2, 4, 2, 1, 3, 4]));
