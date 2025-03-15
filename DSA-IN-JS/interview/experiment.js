


// 1. write a logic to memoize function output
// function add(a, b) {
//   for (let i = 0; i < 100000; i++) { }
//   return a + b
// }

// function memoized(functionToBeMemoized) {
//   let cache = {}
//   return function (...args) {
//     const key = JSON.stringify(args)
//     if (key in cache) return cache[key]
//     else {
//       const result = functionToBeMemoized(...args)
//       cache[key] = result
//       return result
//     }
//   }
// }

// const memoizedAdd = memoized(add)

// console.log(memoizedAdd(3, 2))
// console.log(memoizedAdd(3, 2))

// 2. experiment
// function experiment1() {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(function () {
//       console.log(i)
//     }, 100)
//   }
// }
// function experiment2() {
//   for (var i = 0; i < 3; i++) {
//     function inner(i) {
//       setTimeout(function () {
//         console.log(i)
//       }, 100)
//     }
//     inner(i)
//   }
// }

// experiment1()
// experiment2()

// Filter polyfill
// Array.prototype.myFilter = function (callback) {
//   const arr = []
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i])) arr.push(this[i])
//   }
//   return arr
// }

// const filtered = [1, 2, 3].myFilter((el) => el !== 1)
// console.log(filtered)

// flatPolyfill
// Array.prototype.myFlat = function (depth) {
//   let res = []
//   for (let i = 0; i < this.length; i++) {
//     if (depth > 0 && Array.isArray(this[i])) {
//       depth--
//       res = [...res, ...this[i].myFlat(depth)]
//     } else {
//       res.push(this[i])
//     }
//   }
//   return res
// }


// const flattenedArr = [1, 2, [3, [4]]].myFlat(Infinity)
// console.log(flattenedArr)

// infinteCurrying

// function sum(outer) {
//   return function (inner) {
//     if (inner)
//       return sum(outer + inner)
//     else return outer
//   }
// }

// const res = sum(1)(2)()
// console.log(res);

// map polyfill
// Array.prototype.myMap = function (cb) {
//   const arr = [];
//   for (let i = 0; i < this.length; i++) {
//     arr.push(cb(this[i]))
//   }
//   return arr;
// }
// console.log([1, 2, 3].myMap((el) => el * 10))

// move zeroes to end
// function moveZeroes(arr) {
//   let left = 0
//   let right = arr.length - 1

//   function moveRight() {
//     while (arr[right] === 0 && right > 0) {
//       right--
//     }
//   }

//   // move zeroes
//   while (left < right) {
//     if (arr[left] === 0) {
//       moveRight()
//       arr[left] = arr[right]
//       arr[right] = 0
//       left++
//       right--
//     }
//     left++
//   }
//   return arr
// }
// console.log(moveZeroes([1, 0, 2, 0, 3, 4, 5, 6, 0, 1, 0]))

// reduce polyfill
// Array.prototype.myReduce = function (cb, intitialVal) {
//   let res = intitialVal;
//   for (let i = 0; i < this.length; i++) {
//     res = cb(res, this[i])
//   }
//   return res
// }
// console.log([1, 2, 3, 4].myReduce((acc, el) => acc + el, 0))

// remove duplicates
// let arr = [1, 2, 4, 3, 9, 6, 8, 2, 5, 6, 8];

// function uniqueEl(arr) {
//   const seen = {}
//   const unique = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] in seen) continue
//     seen[arr[i]] = true;
//     unique.push(arr[i])
//   }

//   console.log(unique)

// }
// uniqueEl(arr)

// palindrom 
// function isPalindrome(str) {
//   let start = 0, end = str.length - 1
//   while (start < end) {
//     if (str[start] !== str[end]) return false
//     start++
//     end--
//   }

//   return true
// }

// console.log(isPalindrome("abaa"))

// validPangram
// function validAnagram(str1, str2) {

//   if (str1.length !== str2.length) return false

//   const obj = {}

//   for (let i = 0; i < str1.length; i++) {
//     obj[str1[i]] = (obj[str1[i]] || 0) + 1
//     obj[str2[i]] = (obj[str2[i]] || 0) + 1
//   }

//   for (let i = 0; i < str1.length; i++) {
//     if (obj[str1[i]] !== 2) return false
//   }
//   return true
// }

// console.log(validAnagram('abcd', 'cda'))


// Prmoise.all polyfill

// function showText(text, seconds) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(text), seconds * 1000)
//   })
// }

// function myPromiseAll(promises) {
//   return new Promise((resolve, reject) => {
//     const result = []
//     let resolvePromiseCount = 0
//     for (let i = 0; i < promises.length; i++) {
//       promises[i].then((res) => {
//         result[i] = res
//         resolvePromiseCount++
//         if (resolvePromiseCount === promises.length) resolve(result)

//       }).catch((err) => reject(err))
//     }
//   })

// }

// myPromiseAll([showText('hi1', 3), Promise.resolve('hi2'), Promise.resolve('hi3')])
//   .then((res) =>
//     console.log(res)).
//   catch(err =>
//     console.log(err))


// capitalize all
// let words = ["i", "am", "learning", "recursion"];

// function captalizeAll(words, index = 0) {
//   let res = [];

//   if (words.length === index) return []
//   res = [words[index].toUpperCase(), ...captalizeAll(words, index + 1)]
//   return res
// }

// console.log(captalizeAll(words))

// capitalize first
// let words = ["i", "am", "learning", "recursion"];
// function capitalizeFirst(words, index = 0) {
//   let res = [];

//   if (index === words.length) return []
//   res = [words[index][0].toUpperCase() + words[index].slice(1), ...capitalizeFirst(words, index + 1)]
//   return res
// }

// console.log(capitalizeFirst(words))

// collet strings
// const obj = {
//   stuff: "foo",
//   data: {
//     val: {
//       thing: {
//         info: "bar",
//         moreInfo: {
//           evenMoreInfo: {
//             weMadeIt: "baz",
//           },
//         },
//       },
//     },
//   },
// };

// function collectStrings(obj) {
//   let res = []
//   if (Object.keys(obj).length === 0) return []
//   Object.keys(obj).forEach((el) => {
//     if (typeof obj[el] === 'string') res.push(obj[el])
//     if (typeof obj[el] === "object") res = [...res, ...collectStrings(obj[el])]
//   })
//   return res
// }

// console.log(collectStrings(obj))

// factorial

// function factorial(num) {
//   if (num === 0) return 1;
//   const res = num * factorial(num - 1)
//   return res
// }
// console.log(factorial(5))

// fib
// function fib(n, memoizeArr) {
//   if (n === 1) return 0
//   if (n === 2) return 1

//   if (memoizeArr[n] !== -1) {
//     return memoizeArr[n]
//   }
//   const res = fib(n - 1, memoizeArr) + fib(n - 2, memoizeArr)
//   memoizeArr[n] = res
//   return res
// }
// const n = 1000
// const memoizeArr = Array(n + 1).fill(-1)
// console.log(fib(n, memoizeArr))
// console.log(memoizeArr)

// // isPalindrome
// function isPalindrome(str, i = 0) {
//   if (i >= Math.floor(str.length / 2)) return true

//   if (str[i] === str[str.length - i - 1]) return isPalindrome(str, i + 1)
//   return false

// }

// console.log(isPalindrome("acna"))

// // reverse string
// function reverseString(str, n = str.length - 1) {
//   if (n < 0) return ''
//   const res = str[n] + reverseString(str, n - 1)
//   return res
// }

// console.log(reverseString('abcd'))

// kadanes algo
function kadanesAlgo(nums) {
  let maxSum = -Infinity;
  let tempSum = 0;

  for (let i = 0; i < nums.length; i++) {
    tempSum += nums[i];
    maxSum = Math.max(maxSum, tempSum)
    if (tempSum < 0) tempSum = 0
  }
  return maxSum
}

console.log(kadanesAlgo([-2, -3, 4, -1, -2, 1, 5, 9]));