function showText(text, timer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, timer * 1000);
  });
}

function myPromiseAll(args) {
  const arr = [];
  return new Promise((resolve, reject) => {
    args.forEach((prom, i) => {
      prom
        .then((res) => {
          arr.push(res);
          if (i == args.length - 1) resolve(arr);
        })
        .catch((err) => reject(err));
    });
  });
}

myPromiseAll([
  showText("aaa", 1),
  Promise.resolve("hi"),
  Promise.reject("hello"),
]).then((res) => console.log(res));

// Promise.all([showText("aaa", 1), Promise.resolve("hi")]).then((res) =>
//   console.log(res)
// );
