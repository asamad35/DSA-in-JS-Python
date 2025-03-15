/**
This is a classic JavaScript closure and variable scoping issue. Let me explain why experiment1() prints "3,3,3":
The key issue here is the use of var which has function scope, not block scope. When you use var, the variable i is hoisted to the function level.
The setTimeout functions are scheduled to run after the loop completes (due to the 100ms delay). By the time they execute, the loop has already finished and i has reached the value 3.
All three setTimeout callbacks form closures that reference the same variable i. They don't capture the value of i at the time the setTimeout was created; instead, they capture a reference to i.
Here's how it executes:
The loop runs quickly, incrementing i from 0 to 3
Three setTimeout callbacks are scheduled
When the loop finishes, i is 3
After 100ms, all callbacks run and reference the same i, which is now 3
To fix this, you have two main options:
 */

function experiment1() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log(i)
    }, 100)
  }
}

/**
 * In experiment2():
Each iteration creates a new function inner with its own parameter i
When inner(i) is called, it creates a closure that captures its own copy of i
This effectively creates three different scopes, each with its own value of i (0, 1, and 2)
Therefore, the callbacks print the values in sequence: 0, 1, 2
 */

function experiment2() {
  for (var i = 0; i < 3; i++) {
    function inner(i) {
      setTimeout(function () {
        console.log(i)
      }, 100)
    }
    inner(i)
  }
}

experiment1()
experiment2()