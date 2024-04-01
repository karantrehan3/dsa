/**
 * Returns 1 if a subsequence with a given sum is found, otherwise 0.
 * Recursively finds the count of subsequences whose sum results in the target sum.
 *
 * Time Complexity: O(2^n)
 * Space Complexity: O(n)
 *
 * @param {number} index - The current index of the array.
 * @param {number} currentSum - The current sum of the subsequence.
 * @param {number} sum - The target sum.
 * @param {Array<number>} array - The input array.
 * @returns {number}
 */
function countSubsequence(index, currentSum, sum, array) {
  if (index === array.length) {
    // base-case
    if (currentSum === sum) {
      return 1;
    }
    return 0;
  }

  currentSum += array[index];

  const left = countSubsequence(index + 1, currentSum, sum, array); // pick

  currentSum -= array[index];

  // not-pick
  const right = countSubsequence(index + 1, currentSum, sum, array); // pick

  return left + right;
}

/**
 * Input:
 *
 * index = 0
 * currentSum = 0
 * sum = 2 (target sum)
 * array = [1, 2, 1]
 */
const count = countSubsequence(0, 0, 2, [1, 2, 1]); // invoking call
console.log(count);

/**
 * Output:
 *
 * 2
 */
