/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here

emotions("happy", function laugh(num) {
  var x = "";
  for (i = 1 ; i <= num ; i++) {
    x += "ha";
  }
  return x + "!";
} );

// call the emotions function here and pass in an
// inline function expression
