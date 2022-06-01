function repeatAndMissingNumber(arr) {
  const res = [];
  // repeated number
  const hashTable = new Set();
  arr.forEach((el) => {
    if (hashTable.has(el)) res.push(el);
    else hashTable.add(el);
  });

  for (let i = 1; i <= arr.length; i++) if (!hashTable.has(i)) res.push(i);

  return res;
}

console.log(repeatAndMissingNumber([1, 2, 3, 4, 3]));
