/*Example 11 - The for loop

Write a for loop that prints numbers in ascending order to the browser console
from min to max, but only if the number is a multiple of 5.
*/

const numberMin = 20;
const numberMax = 120;

for (let i = numberMin; i <= numberMax; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}
