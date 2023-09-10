/*Example 3 - Branching

Write a script that prints the string: "This is a positive number" to the console,
if the user entered a number greater than zero in the prompt. 

If zero was entered, output to the console the string: "This is zero". 

If a negative number is passed, in the console should be the string: 
"This is a negative number".
*/


const userInput = prompt('Indroduceti numarul:');
const number = Number(userInput);

if (number > 0) {
  console.log("This is a positive number");
} else if (number == 0) {
  console.log("This is zero");
} else if (number < 0) {
  console.log("This is a negative number");
} else {
  console.log("This is not a number !");
}


// sau (varianta mea) //

/* ! number inainte de prompt pentru a transforma raspunsul (basic) din string 
in number, pentru a putea fi comparat (===) cu numarul 0. !

const userAnswer = Number(prompt("Indroduceti numarul:"));
let answerString;

if (userAnswer > 0) {
  answerString = "This is a positive number";
} else if (userAnswer === 0) {
  answerString = "This is zero";
} else if (userAnswer < 0) {
  answerString = "This is a negative number";
} else {
  answerString = "This is not a number !";
}

console.log(answerString);
*/





