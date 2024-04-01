/**
 * Finds the factorial of n recursively.
 *
 * Time Complexity: O(n) (depth of the recursion tree)
 * Space Complexity: O(n)
 * @param {number} n - The number of which factorial is to be found
 * @returns {number}
 */
function factorial(n) {
  if (n == 1) {
    // base-case
    return 1;
  }

  return n * factorial(n - 1); // recursive-call;
}

// invoking call
const fact = factorial(5); // 120
console.log(fact);
