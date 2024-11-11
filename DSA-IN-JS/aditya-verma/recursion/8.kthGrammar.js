/***
 * For every 0 in prev row replace with 01 and for every 1 in prev row replace with 10
 * Example: 0
 *          0 1
 *          0 1 1 0
 * 
 * Observation no1: 0               -----> length is 2^0
 *                  0 1             -----> length is 2^1
 *                  0 1 1 0         -----> length is 2^2

* Observation no2:  0               
 *                  0 1             
 *                  0 1 1 0         
 *  
 * Till mid point, row elements are similar to prev row,
 * After mid point, row elements are inverse of prev row.
 * 
 * So if K is less than or equal to mid point index then, We can solve for (n-1,k) row.
 * But if K is more than mid point index, we can solve for (n-1,k-mid) and inverse this result.
 * (k-mid) because then it maps to the prev row (n-1)th row. 
 */

function solve(n, k) {
    if (n === 1 && k === 1) return 0;
    const mid = Math.pow(2, n - 1) / 2

    if (mid >= k) {
        return solve(n - 1, k);
    } else {
        return solve(n - 1, k - mid) ? 0 : 1;
    }

}

var kthGrammar = function (n, k) {
    return solve(n, k)
};

console.log(kthGrammar(2, 2))