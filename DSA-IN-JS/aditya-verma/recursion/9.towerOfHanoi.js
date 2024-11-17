// Purely base on leap of faith

function towerOfHanoi(n, source, helper, destination, total) {
  // Base condition: Move the last plate from from source to destination.  
  if (n === 1) {
    console.log(`Moving plate ${n} from ${source} -> ${destination} `)
    total.moves++
    return
  }

  // Step 1: move n-1 plates from tower1 to tower2
  towerOfHanoi(n - 1, source, destination, helper, total)

  // Step 2: move remaining last plate from tower1 to tower3.
  console.log(`Moving plate ${n} from ${source} -> ${destination} `)
  total.moves++

  // Step 3: Move n-1 plates from tower2 to tower3
  towerOfHanoi(n - 1, helper, source, destination, total)
  return
}

let total = { moves: 0 }

towerOfHanoi(10, 'tower1', 'tower2', 'tower3', total)
console.log('no of moves: ' + total.moves)