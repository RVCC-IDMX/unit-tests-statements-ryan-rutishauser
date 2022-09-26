/*
 * stmnts-05.js
 * Language: javascript
 * Test: tests/stmnts-05.test.js
 * Path: src/stmnts-05.js
 * Boolean expressions for numbers
 */

/**
 * Check if a number is odd
 * @param {number} num - number to check
 * @returns {boolean} - true if num is odd, false otherwise
 */
function isOdd(num) {
  let odd = true;
  if (num % 2 === 0) {
    odd = false;
  }
  return odd;
}

/**
 * Check if a number is even
 * @param {number} num - number to check
 * @returns {boolean} - true if num is even, false otherwise
 */
function isEven(num) {
  let even = false;
  if (num % 2 === 0) {
    even = true;
  }
  return even;
}

/**
 * Check if a value is a number and negative
 * @param {*} value
 * @returns {boolean} - true if value is a negative number, false otherwise
 */
function isNegative(value) {
  let negative;
  if (value < 0) {
    negative = true;
  }
  else {
    negative = false;
  }
  return negative;
}

module.exports = {
  isOdd,
  isEven,
  isNegative,
};
