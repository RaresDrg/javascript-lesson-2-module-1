/*Example 1 - User Input and Branching

Using the if..else and prompt constructs, write code that will ask:
"What is the official name of JavaScript?".

If the user enters ECMAScript, then show an alert with the string "Correct!",
otherwise - "Do not know? ECMAScript!"
*/

let answer = prompt('What is the official name of JavaScript?');
const correctAnswer = "ECMAScript";

const answerSlicedForNormalize = answer.slice(0, 5);
const answerSlicedForNormalizeToUpperCase = answerSlicedForNormalize.toUpperCase();

const answerSlicedForTheRestOf = answer.slice(5, answer.length)

const answerNormalized = answerSlicedForNormalizeToUpperCase + answerSlicedForTheRestOf;

console.log(answerSlicedForNormalize);
console.log(answerSlicedForNormalizeToUpperCase)
console.log(answerSlicedForTheRestOf);
console.log(answerNormalized);


if (answerNormalized === correctAnswer) {
  alert('Correct!');
} else {
  alert('Do not know? ECMAScript!');
}