/**
 * Prints numbers from 1 to n recursively.
 *
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
