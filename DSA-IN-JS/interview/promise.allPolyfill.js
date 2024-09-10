function showText(text, timer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, timer * 1000);
  });
}

function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const result = [];
    let resolvePromiseCount = 0
    promises.forEach((promise, index) => {
      promise
        .then((res) => {
          result[index] = res
          resolvePromiseCount++
          if (resolvePromiseCount === promises.length) resolve(result);
        })
        .catch((err) => reject(err));
    });
  });
}

myPromiseAll([
  showText("aaa", 1),
  Promise.resolve("hi"),
  Promise.resolve("hello"),
]).then((res) => console.log(res)).catch((err) => console.log(err));

// Promise.all([showText("aaa", 1), Promise.resolve("hi")]).then((res) =>
//   console.log(res)
// );
