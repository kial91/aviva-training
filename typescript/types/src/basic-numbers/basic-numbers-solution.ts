/**
 * Returns the sum of an array of numbers
 *
 * @param {number[]} arr
 * @returns {number} sum of numbers in the array
 */

function sumNumbers(arr: number[]): number {
  return arr.reduce((numberAcc, number) => numberAcc + number, 0);
}
