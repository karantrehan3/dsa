/**
 * Prints the first subsequence of an array with a given sum.
 *
 * Time Complexity: O(2^n)
 * Space Complexity: O(n)
 *
 * @param {number} index - The current index of the array.
 * @param {Array<number>} arr - The current subsequence being formed.
 * @param {number} currentSum - The current sum of the subsequence.
 * @param {number} sum - The target sum.
 * @param {Array<number>} array - The input array.
 * @returns {boolean}
 */
function printSubsequence(index, arr, currentSum, sum, array) {
  if (index === array.length) {
    // base-case
    if (currentSum === sum) {
      console.log(arr);
      return true;
    }
    return false;
  }

  arr.push(array[index]);
  currentSum += array[index];

  // pick
  if (printSubsequence(index + 1, arr, currentSum, sum, array)) {
    return true;
  }

  arr.pop();
  currentSum -= array[index];

  // not-pick
  if (printSubsequence(index + 1, arr, currentSum, sum, array)) {
    return true;
  }

  return false;
}

/**
 * Input:
 *
 * index = 0
 * arr = []
 * currentSum = 0
 * sum = 2 (target sum)
 * array = [1, 2, 1]
 */
printSubsequence(0, [], 0, 2, [1, 2, 1]); // invoking call

/**
 * Output:
 *
 * [1, 1]
 */
