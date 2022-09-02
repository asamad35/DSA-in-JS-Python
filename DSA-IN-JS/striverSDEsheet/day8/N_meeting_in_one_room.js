/*
* Hume maximum meetings krni he. To wo meetings jisme km time lg rha he usko pehle krwaenge. 
* Jisme km time lgega unka ending time km hoga. Eg. (1,10) , (1,2)

- 1) Arrange meetings in order of ascending ending time.
- 2) Create a variable to track meeting endTimeLimit.
- 3) Count those meeting whose starting time is more than end time of previous meeting happened. (i.e endTimeLimit).
- 4) Update count and endTimeLimit when meeting happens.
*/

// O(n + nlogn + n) S(n)
maxMeetings(start, end, n);
{
  const meetingArr = [];

  //   clubbing start and end time
  for (let i = 0; i < n; i++) {
    const meetingPeriod = [start[i], end[i]];
    meetingArr.push(meetingPeriod);
  }

  //   sort
  meetingArr.sort((a, b) => a[1] - b[1]);

  let meetingCount = 1;
  let endLimit = meetingArr[0][1];

  //   Count meetings
  for (let i = 1; i < meetingArr.length; i++) {
    if (meetingArr[i][0] > endLimit) {
      meetingCount++;
      endLimit = meetingArr[i][1];
    }
  }

  return meetingCount;
}
