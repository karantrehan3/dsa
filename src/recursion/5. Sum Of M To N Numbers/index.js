/**
 * Finds the sum of numbers from m to n recursively.
 *
 * Time Complexity: O(n) (depth of the recursion tree)
 * Space Complexity: O(n)
 * @param {number} m - The starting number
 * @param {number} n - The ending number
 * @returns {number}
 */
function sumNumbers(m, n) {
    if (m > n) {
      // base-case
      return 0;
    }

    return m + sumNumbers(m + 1, n); // recursive-call;
  }
  
  // invoking call
  const sum = sumNumbers(1, 5); // 15
  console.log(sum);
  