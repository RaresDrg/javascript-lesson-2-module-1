/*Example 7 - Link formatting (ternary operator)

Make code refactoring of the task number 4 code using ternary operator:

Write a script that compares the numbers in variables a and b.
If both values greater than 100, then print the maximum of them to the console.
Otherwise, the console should show the sum of the value b and the number 512.
*/

const numberA = 120;
const numberB = 150;
const isGreater = numberA > 100 && numberB > 100;

let answer;
answer = isGreater ? Math.max(numberA, numberB) : numberB + 512;

console.log(answer);