/**
 * Prints numbers from n to 1 recursively.
 *
 * Time Complexity: O(n) (depth of the recursion tree)
 * Space Complexity: O(n)
 * @param {number} index - The current index.
 * @param {number} n - The maximum number to print.
 * @returns {void}
 */
function printNumbers(index, n) {
  if (index < 1) {
    // base-case
    return;
  }
  console.log(index);

  printNumbers(index - 1, n); // recursive-call
  return;
}

// invoking call
printNumbers(5, 5);
