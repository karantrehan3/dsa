/**
 * Finds the nth fibonacci number recursively.
 *
 * Time Complexity: O(2^n)
 * Space Complexity: O(n)
 * @param {number} n - The number of which factorial is to be found
 * @returns {number}
 */
function nthFibonacci(n) {
  if (n <= 1) {
    // base-case
    return n;
  }

  return nthFibonacci(n - 1) + nthFibonacci(n - 2); // recursive-call;
}

// invoking call
const num = nthFibonacci(6); // 8
console.log(num);
