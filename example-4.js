/*Example 4 - Nested branches

Write a script that compares the numbers in variables a and b.

If both values greater than 100, then print the maximum of them to the console.
Otherwise, the console should show the sum of the value b and the number 512.
*/

const numberA = 120;
const numberB = 150;

const isGreater = numberA > 100 && numberB > 100;

if (isGreater) {
  console.log(Math.max(numberA, numberB));
} else {
  console.log(numberB + 512);
}

