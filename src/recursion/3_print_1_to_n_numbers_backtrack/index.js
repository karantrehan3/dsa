/**
 * Prints numbers from 1 to n recursively by backtracking.
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

  printNumbers(index - 1, n); // recursive-call
  console.log(index); // recurse first and then log (backtracking)
  return;
}

// invoking call
printNumbers(5, 5);
