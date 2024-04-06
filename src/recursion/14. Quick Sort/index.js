/**
 * Partitions array into two subarrays where the pivot gets places in it's
 * correct position and left subarray's elements are less than the pivot
 * and the right subarray's elements are greater than the pivot.
 *
 * Time complexity: O(nlogn)
 * Space complexity: O(1)
 *
 * @param {Array} arr - The input array.
 * @param {number} low - The starting index of the first subarray.
 * @param {number} high - The ending index of the second subarray.
 * @returns {number} the partition index
 */
function partition(arr, low, high) {
  const pivot = arr[low];
  let i = low;
  let j = high;

  while (i < j) {
    while (arr[i] <= pivot && i <= high - 1) {
      i += 1; // keep increasing i until the current element at i is > pivot
    }

    while (arr[j] > pivot && i >= low + 1) {
      j -= 1; // keep decreasing j until the current element at j is <= pivot
    }

    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]]; // swap smaller element with the larger element
    }
  }

  [arr[low], arr[j]] = [arr[j], arr[low]]; // swap pivot with j index so as to place pivot to it's sorted place
  return j;
}

/**
 * Sorts an array using the quick sort algorithm.
 *
 * @param {Array} arr - The array to be sorted.
 * @param {number} low - The starting index of the subarray to be sorted.
 * @param {number} high - The ending index of the subarray to be sorted.
 * @returns {void}
 */
function quickSort(arr, low, high) {
  if (low >= high) {
    return;
  }

  const partitionIndex = partition(arr, low, high);
  quickSort(arr, low, partitionIndex - 1);
  quickSort(arr, partitionIndex + 1, high);
}

/**
 * Input:
 *
 * array = [5, 1, 3, 6, 2, 5]
 * low = 0
 * high = 5
 */
const array = [5, 1, 3, 6, 2, 5];

quickSort(array, 0, array.length - 1); // invoking call

console.log(array);

/**
 * Output:
 *
 * [1, 2, 3, 5, 5, 6]
 */
