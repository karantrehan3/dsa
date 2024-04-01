/**
 * Finds the product of numbers from m to n recursively.
 *
 * Time Complexity: O(n) (depth of the recursion tree)
 * Space Complexity: O(n)
 * @param {number} m - The starting number
 * @param {number} n - The ending number
 * @returns {number}
 */
function multiplyNumbers(m, n) {
    if (m > n) {
      // base-case
      return 1;
    }

    return m * multiplyNumbers(m + 1, n); // recursive-call;
  }
  
  // invoking call
  const product = multiplyNumbers(1, 5); // 120
  console.log(product);
  