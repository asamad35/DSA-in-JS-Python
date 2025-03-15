

function findRotations(arr) {
  let start = 0;
  let end = arr.length - 1;

  if (arr[start] <= arr[end]) return 0

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const prev = (mid - 1 + arr.length) % arr.length
    const next = (mid + 1) % arr.length

    if (arr[mid] <= arr[prev] && arr[mid] <= arr[next]) return mid
    if (arr[0] <= arr[mid]) start = mid + 1;
    else end = mid - 1;
  }
}
const arr = [3, 4, 5, 1, 2]
// const arr = [5, 1, 2, 3, 4]
console.log(findRotations(arr))