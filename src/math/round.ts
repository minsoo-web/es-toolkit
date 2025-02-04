/**
 * Rounds a number to a specified precision.
 * 
 * This function takes a number and an optional precision value, and returns the number rounded 
 * to the specified number of decimal places.
 *
 * @param {number} value - The number to round.
 * @param {number} [precision=0] - The number of decimal places to round to. Defaults to 0.
 * @returns {number} The rounded number.
 *
 * @example
 *  * const result1 = round(1.2345); // result1 will be 1
 * const result2 = round(1.2345, 2); // result2 will be 1.23
 * const result3 = round(1.2345, 3); // result3 will be 1.235
 */
export function round(value: number, precision: number = 0): number {
  const multiplier = Math.pow(10, precision);
  return Math.round(value * multiplier) / multiplier;
}
