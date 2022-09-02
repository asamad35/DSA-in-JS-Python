let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

function stringifyNumbers(obj) {
  obj = JSON.parse(JSON.stringify(obj));
  mainFunc(obj);
  function mainFunc(obj) {
    for (const key in obj) {
      if (typeof obj[key] === "object") mainFunc(obj[key]);
      else {
        if (typeof obj[key] === "number") obj[key] = JSON.stringify(obj[key]);
      }
    }
  }
  return obj;
}

console.log(stringifyNumbers(obj));
