/* Example 8 - if...else and logical operators

Write a script that will output a string to the browser console depending 
on hours variable values. If the value of the variable hours:

less than 17, output the string "Pending"

greater than or equal to 17 and less than or equal to 24, output the string "Expires"

greater than 24, output the string "Overdue".
*/

const hour = 10;
let answer;

if (hour < 17) {
  answer = "Pending";
} else if (hour >= 17 && hour <= 24) {
  answer = "Expires";
} else {
  answer = "Overdue";
}

console.log(answer);
