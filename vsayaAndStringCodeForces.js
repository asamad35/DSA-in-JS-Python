function vsayaAndString(str, k) {
  let [start, end, ans, count] = [0, 0, 0, 0];

  ["a", "b"].forEach((el) => {
    count = 0;
    end = 0;
    start = 0;

    while (end < str.length) {
      if (str[end] === el) {
        count++;
      }
      if (count > k) {
        while (str[start] !== el) {
          start++;
        }
        start++;
        count--;
      }

      ans = Math.max(ans, end - start + 1);
      end++;
    }
  });
  return ans;
}

console.log(vsayaAndString("aaabbbaaaabbbbaabbbaaaa", 1));
