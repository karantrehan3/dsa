/**
 * Merges two sorted subarrays into a single sorted subarray.
 *
 * @param {Array} arr - The input array.
 * @param {number} low - The starting index of the first subarray.
 * @param {number} mid - The ending index of the first subarray.
 * @param {number} high - The ending index of the second subarray.
 */
function merge(arr, low, mid, high) {
  const temp = [];
  let left = low;
  let right = mid + 1;

  // sort the arrays till both arrays have elements
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left += 1;
    } else {
      temp.push(arr[right]);
      right += 1;
    }
  }

  // add all remaining elements from left subarray
  while (left <= mid) {
    temp.push(arr[left]);
    left += 1;
  }

  // add all remaining elements from right subarray
  while (right <= high) {
    temp.push(arr[right]);
    right += 1;
  }

  // replace the elements in the original array from the sorted array
  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
}

/**
 * Sorts an array using the merge sort algorithm.
 *
 * @param {Array} arr - The array to be sorted.
 * @param {number} low - The starting index of the subarray to be sorted.
 * @param {number} high - The ending index of the subarray to be sorted.
 * @returns {void}
 */
function mergeSort(arr, low, high) {
  if (low >= high) {
    return;
  }

  const mid = Math.floor((low + high) / 2);
  mergeSort(arr, low, mid); // divide the first half
  mergeSort(arr, mid + 1, high); // divide the second half

  merge(arr, low, mid, high); // merge the two halves at hand
}

/**
 * Input: 
 * 
 * array = [5, 1, 3, 6, 2, 5]
 * low = 0
 * high = 5
 */
const array = [5, 1, 3, 6, 2, 5];

mergeSort(array, 0, array.length - 1); // invoking call

console.log(array);

/**
 * Output:
 * 
 * [1, 2, 3, 5, 5, 6]
 */
