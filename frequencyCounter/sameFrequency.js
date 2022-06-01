function sameFrequency(arg1, arg2) {
  const num1 = arg1.toString().split("");
  const num2 = arg2.toString().split("");

  const frequencyCounter = {};

  if (num1.length !== num2.length) return false;

  for (let num of num1) {
    frequencyCounter[num] = frequencyCounter[num] ? ++frequencyCounter[num] : 1;
  }

  for (let num of num2) {
    if (!frequencyCounter[num]) return false;
    else {
      frequencyCounter[num] = frequencyCounter[num] - 1;
    }
  }
  return true;
}

console.log(sameFrequency(3589578, 5879385));
