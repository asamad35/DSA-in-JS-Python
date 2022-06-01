function createBase(outerNum) {
  return function (innerNum) {
    return innerNum + outerNum;
  };
}

var addSix = createBase(6);

console.log(addSix(110));
