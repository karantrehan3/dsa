/**
 * Prints all the subsequences of an array.
 *
 * Time Complexity: O(2^n)
 * Space Complexity: O(n)
 *
 * @param {number} index - The current index of the array.
 * @param {Array<number>} arr - The current subsequence being formed.
 * @param {Array<number>} array - The input array.
 * @returns {void}
 */
function printAllSubsequences(index, arr, array) {
  if (index === array.length) {
    // base-case
    console.log(arr);
    return;
  }

  arr.push(array[index]);

  printAllSubsequences(index + 1, arr, array); // pick

  arr.pop();

  printAllSubsequences(index + 1, arr, array); // not-pick

  return;
}

/**
 * Input:
 *
 * index = 0
 * arr = []
 * array = [3, 1, 2]
 */
printAllSubsequences(0, [], [3, 1, 2]); // invoking call

/**
 * Output:
 *
 * [ 3, 1, 2 ]
 * [ 3, 1 ]
 * [ 3, 2 ]
 * [ 3 ]
 * [ 1, 2 ]
 * [ 1 ]
 * [ 2 ]
 * []
 */
