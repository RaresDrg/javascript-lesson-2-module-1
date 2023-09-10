/*Example 6 - Link formatting (includes and logical "AND")

Write a script that checks if the value of the link variable ends by symbol /.
If not, append this character to the end of the link value, but only if link
contains the substring "my-site". Use construction if...else.
*/


// (varianta mea, care este mult mai buna) //

let link = "https://www.youtube.com.my-site";

const message = `It's checked: ${link} ends with "/"`;

if (link.endsWith("/")) {
  console.log(message);
} else if (!link.endsWith("/") && link.includes("my-site")) {
  console.log((link += "/"));
} else {
  console.log('Link doesn\'t contain the substring "my-site". ');
}

// ternary operator //
/*
link += !link.endsWith("/") && link.includes("my-site") ? "/" : "";
console.log(link);
*/



// sau (varianta lui Sergiu) //
/*
let link = "https://my-site.com/about";

const lastCharacter = link.charAt(link.length - 1);

if (lastCharacter !== "/" && link.includes("my-site")) {
  // link = link + '/'; //
  link += "/";
}

console.log(link);

// ternary operator //
/* 
const isLastCharacterSlash = lastCharacter !== "/" && link.includes("my-site");
link += isLastCharacterSlash ? "/" : "";

console.log(link);
*/