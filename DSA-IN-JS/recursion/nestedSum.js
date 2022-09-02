var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 3,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

function nestedSum(obj) {
  let sum = 0;
  for (const key in obj) {
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      return sum + nestedSum(obj[key]);
    } else if (typeof obj[key] === "number") {
      sum += obj[key];
    }
  }
  return sum;
}

console.log(nestedSum(obj1));
