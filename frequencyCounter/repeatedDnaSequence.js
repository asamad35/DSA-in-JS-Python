var findRepeatedDnaSequences = function (s) {
  const seen = {};
  const res = [];
  let i = 0;
  console.log(s.length);
  while (i + 10 <= s.length) {
    const dnaSequence = s.slice(i, i + 10);
    seen[dnaSequence] = (seen[dnaSequence] || 0) + 1;

    if (seen[dnaSequence] === 2) res.push(dnaSequence);
    i++;
  }
  console.log(res);
  return res;
};

findRepeatedDnaSequences("AAAAAAAAAAA");
