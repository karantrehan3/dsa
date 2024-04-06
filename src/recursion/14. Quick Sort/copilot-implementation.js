/**
 * Sorts an array using the Quick Sort algorithm.
 *
 * @param {Array<number>} arr - The array to be sorted.
 * @returns {Array<number>} - The sorted array.
 */
function quicksort(arr) {
  // Base case: if the array is empty or contains only one element, it is already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Choose a pivot element (in this case, the last element)
  const pivot = arr[arr.length - 1];

  // Partition the array into two sub-arrays based on the pivot
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // Recursively sort the sub-arrays
  const sortedLeft = quicksort(left);
  const sortedRight = quicksort(right);

  // Combine the sorted sub-arrays and the pivot to get the final sorted array
  return [...sortedLeft, pivot, ...sortedRight];
}

// Test the quicksort function
const arr = [5, 2, 9, 1, 7, 6, 3];
const sortedArr = quicksort(arr);
console.log(sortedArr);
