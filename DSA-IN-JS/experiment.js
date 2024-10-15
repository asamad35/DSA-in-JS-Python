function calc(mid, n, m) {
  let ans = 1
  for (let i = 1; i <= n; i++) {
    ans = ans * mid
    if (ans > m) return 1
  }
  if (ans === m) return 0
  return -1
}

function NthRoot(n, m) {
  let start = 1, end = m;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2)
    const res = calc(mid, n, m)

    if (res === 0) return mid
    if (res === 1) end = mid - 1
    else if (res === -1) start = mid + 1
  }

  return -1
}

console.log(NthRoot(6, 4096))
