/**
 * Prints all the subsequences of an array with a given sum.
 *
 * Time Complexity: O(2^n)
 * Space Complexity: O(n)
 *
 * @param {number} index - The current index of the array.
 * @param {Array<number>} arr - The current subsequence being formed.
 * @param {number} currentSum - The current sum of the subsequence.
 * @param {number} sum - The target sum.
 * @param {Array<number>} array - The input array.
 * @returns {void}
 */
function printSubsequence(index, arr, currentSum, sum, array) {
  if (index === array.length) {
    // base-case
    if (currentSum === sum) {
      console.log(arr);
    }
    return;
  }

  arr.push(array[index]);
  currentSum += array[index];

  printSubsequence(index + 1, arr, currentSum, sum, array); // pick

  arr.pop();
  currentSum -= array[index];

  printSubsequence(index + 1, arr, currentSum, sum, array); // not-pick

  return;
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
 * [2]
 */
