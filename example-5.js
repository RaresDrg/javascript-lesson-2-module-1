/*Example 5 - Link Formatting (endsWith)

Write a script that checks if the value of the link variable ends symbol /. if not,
add this character to the end of the link value. Use if...else construction.
*/


// (varianta mea, care este mult mai buna) //

let link = "https://www.youtube.com/";

const message = `It's checked: ${link} ends with "/"`;

// if...else //
if (link.endsWith("/")) {
  console.log(link.endsWith("/"));
  console.log(message);
} else {
  console.log((link += "/"));
}

// ternary operator //
/*
link = link + (link.endsWith("/") ? "" : "/"); 
// sau //
link += link.endsWith("/") ? "" : "/";

console.log(link);
*/




// sau (varianta lui Sergiu) //
/*
let link = "https://my-site.com/about";

const lastCharacter = link.charAt(link.length - 1);
const isLastCharacterSlash = lastCharacter === "/"

// if...else //
if (isLastCharacterSlash) {
  link += "";
} else {
  link += "/";
}

console.log(link);

// ternary operator //
/*
link += isLastCharacterSlash ? "" : "/";
// sau //
link = link + (isLastCharacterSlash ? "" : "/");

console.log(link);
*/