/**
 * Reverses the elements of an array in groups of size k.
 *
 * @param {Array<number>} arr - The input array.
 * @param {number} k - The size of each group.
 * @returns {Array<number>} - The array with elements reversed in groups of size k.
 */
function reverseKGroup(arr, k) {
  if (arr.length < k) {
    return arr;
  }

  let result = [];
  let current = arr.slice(0, k);

  while (current.length > 0) {
    result.push(current.pop());
  }

  if (Number.isFinite(arr[k + 1])) {
    result = result.concat(reverseKGroup(arr.slice(k), k)); // if next element after kth element exists, recursively reverse and concatenate
  }

  return result;
}

/**
 * Input:
 *
 * array = [1, 2, 3, 4, 5]
 * k = 3
 */
const array = [1, 2, 3, 4, 5];
const k = 3;

const result = reverseKGroup(array, k); // invoking call

console.log(result);

/**
 * Output:
 *
 * [3, 2, 1, 4, 5]
 */
