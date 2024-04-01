/**
 * Prints numbers from 1 to n recursively.
 *
 * Time Complexity: O(n) (depth of the recursion tree)
 * Space Complexity: O(n)
 * @param {number} index - The current index.
 * @param {number} n - The maximum number to print.
 * @returns {void}
 */
function printNumbers(index, n) {
  if (index > n) {
    // base-case
    return;
  }
  console.log(index);

  printNumbers(index + 1, n); // recursive-call
  return;
}

// invoking call
printNumbers(1, 5);
