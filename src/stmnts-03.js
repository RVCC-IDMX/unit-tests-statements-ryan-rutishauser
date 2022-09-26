/*
 * stmnts-03.js
 * Language: javascript
 * Test: tests/stmnts-03.tests.js
 * Path: src/stmnts-03.js
 * Arithmetic Expressions
 * [JavaScript: The Definitive Guide, Chapter 4.8](https://bit.ly/2Z30rSk)
 */

/**
 * Calculates the perimeter of the rectangle rounded to 2 decimal places
 * @param {number} width - the width of the rectangle
 * @param {number} height - the height of the rectangle
 * @returns {number} - the perimeter of the rectangle rounded to 2 decimal places
 *
 */

function rectanglePerimeter(width, height) {
  const perimeter = ((width + height) * 2);
  return perimeter.toFixed(2);
}

/**
 * Calculates the area of a rectangle rounded to 2 decimal places
 * @param {number} width - the width of the rectangle
 * @param {number} height - the height of the rectangle
 * @returns {number} - the area of the rectangle rounded to 2 decimal places
 *
 */
function rectangleArea(width, height) {
  const area = width * height;
  return area.toFixed(2);
}

/**
 * Calculates the circumference of a circle with a known radius
 * rounded to 2 decimal places
 * @param {number} radius - the radius of the circle
 * @returns {number} - the circumference of the circle rounded to 2 decimal places
 *
 * The math equation is c = 2 * pi * radius
 *
 * Hint: use toFixed()
 */
function circleCircumference(radius) {
  const number = radius * (2 * Math.PI);
  return number.toFixed(2);
}

/**
 * Calculates the area of a circle with a known radius
 * rounded to 2 decimal places
 * @param {number} radius - the radius of the circle
 * @returns {number} - the area of the circle rounded to 2 decimal places
 */
function circleArea(radius) {
  const number = (radius ** 2) * (Math.PI);
  return number.toFixed(2);
}

/**
 * Calculates the area of a triangle with three sides
 * rounded to 2 decimal places
 *
 * @param {number} base - the base of the triangle
 * @param {number} height - the height of the triangle
 * @returns {number} - the area of the triangle rounded to 2 decimal places
 */
function triangleArea(base, height) {
  const number = ((base * height) / 2)
  return number.toFixed(2);
}

/**
 * Calculates the hypotenuse of a right triangle with two sides,
 * rounded to 2 decimal places
 * @param {number} sideA - the length of side A
 * @param {number} sideB - the length of side B
 * @returns {number} - the hypotenuse of the triangle rounded to 2 decimal places
 */
function pythagorean(sideA, sideB) {
  let number = (sideA ** 2 + sideB ** 2);
  number **= (1 / 2);
  return number.toFixed(2);
}

module.exports = {
  rectanglePerimeter,
  rectangleArea,
  circleCircumference,
  circleArea,
  triangleArea,
  pythagorean,
};
