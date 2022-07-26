/*
firstly we need to complete jobs with maximum profit, in order to maximize the profit.
And we will complete these jobs at their last day , i.e deadline day. because we need remaining time to complete other jobs.
suppose a job has deadline 5 and profit 100. another job with dealine 1 and profit 50.
If we complete job with deadline 5 on 1st day (i.e dealine of another job) then we cannot execute the second job because its deadline has already passed.

So complete jobs at their deadline day. If deadline is already occupied then complete at a day before deadline and so on.
*/

// - O(NLog(N)) S(N)
JobScheduling(arr, n);
{
  // - sorting by profit
  arr.sort((a, b) => b.profit - a.profit);

  //   - getting maximum deadline to create daysArray
  let maxDeadline = 0;
  arr.forEach((el) => {
    maxDeadline = Math.max(el.dead, maxDeadline);
  });

  const daysArr = new Array(maxDeadline + 1).fill(false);
  let count = 0;
  let profit = 0;

  // - Execute jobs with max deadline first
  for (let i = 0; i < arr.length; i++) {
    // - If deadline day is occupied then check a day before it
    for (let j = arr[i].dead; j > 0; j--) {
      if (daysArr[j] === false) {
        count++;
        profit += arr[i].profit;
        daysArr[j] = true;
        break;
      }
    }
  }

  return [count, profit];
}
