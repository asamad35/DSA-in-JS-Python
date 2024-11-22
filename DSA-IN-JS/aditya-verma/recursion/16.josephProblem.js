

function solve(persons, k, startIndex) {

  // Base case is when there is only one person alive.
  if (persons.length === 1) {
    return persons[0]

  }

  // cicular index at which person needs to be killed.
  const indexToKill = (startIndex + k) % persons.length
  persons.splice(indexToKill, 1); // killing the person (removing from the array)

  // Now solving it again for a smaller input (person will be smaller)
  return solve(persons, k, indexToKill)

}





function josephProblem(n, k) {
// We need to create people array starting from 1 to N. 
  const persons = []
  for (let i = 1; i <= n; i++) {
    persons.push(i)
  }

  // k-- because person starts to count including himself 
  k--

  // Now we assume that this solve function will get us the postion of last alive person in "persons" array.
  return solve(persons, k, 0)

}

console.log(josephProblem(40, 7));
