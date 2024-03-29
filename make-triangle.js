/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(num) {
  var x = "";
  for (var i = 1 ; i <= num ; i++) {
    x += makeLine(i);
  }
  return x 
}
console.log(buildTriangle(10));

// test your code by uncommenting the following line
//console.log(buildTriangle(10));