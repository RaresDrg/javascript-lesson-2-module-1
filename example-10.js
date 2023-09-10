/* Example 10 - Project submission deadline (switch)

Write a script to display the project deadline time, using switch.

If there are 0 days before the deadline - output the string "Today"
If it's 1 day before the deadline - output the string "Tomorrow"
If it's 2 days before the deadline - output the string "The day after tomorrow"
If it's 3+ days before the deadline - print the string "Date in the future"
*/

const daysUntilDeadline = 1; 
let deadline;

switch (daysUntilDeadline) {
  case 0:
    deadline = "Today";
    break
  
  case 1: 
    deadline = "Tomorrow";
    break
  
  case 2: 
    deadline = "The day after tomorrow";
    break
  
  default: 
    deadline = "Date in the future";
}

console.log(deadline);