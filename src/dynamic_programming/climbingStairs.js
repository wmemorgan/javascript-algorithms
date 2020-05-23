/**
 * Climbing Stairs
 * https://leetcode.com/problems/climbing-stairs/
 */

/**
 * @param {number} n
 * @return {number}
 */
/*----RECURSIVE APPROACH----*/
// BASE CASE - 1 step return 1
// BASE CASE - 2 step return 2

// Recursive Relation
    // return func(n+1) + func(n+2)
var climbStairs = function takeSteps(n) {
    // Edge case
    if (n < 0) return 0
    // Base case
    if (n <= 2) return n

    return takeSteps(n-1) + takeSteps(n-2)
};

/*----MEMOIZED APPROACH----*/
// Create a cache variable to store previous function calls
// Look up function call in cache
    // If there return cache value
    // Else invoke recursive function and save it to cache
    // return cache value

function takeStepsMemoized() {
    const cache = {}
    return function takeSteps(n) {
        if (n in cache) return cache[n]
        else {
            // Edge case negative steps
            if (n < 0) return 0
            // Base case
            if (n <= 2) return n

            // Recursive relation
            cache[n] = takeSteps(n - 1) + takeSteps(n - 2)
            return cache[n]
        }

    }
} 
var climbStairs = takeStepsMemoized()

const n = 4
console.log(climbStairs(n))