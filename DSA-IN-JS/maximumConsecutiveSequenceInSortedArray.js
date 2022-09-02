function maxSequence(arr) {
  let [start, end] = [0, 0];
  let ans = 0;

  //   loop untill end < arr.length
  while (end < arr.length) {
    if (arr[end + 1] === arr[end] + 1) {
      end++;
      //   store the answer
      ans = Math.max(ans, end - start + 1);
    } else {
      end++;
      //   start and end are same when the consecutive sequence breaks to find the next sequence.
      start = end;
    }
  }

  return ans;
}

console.log(maxSequence([1, 3, 4, 5, 101, 102, 103]));
