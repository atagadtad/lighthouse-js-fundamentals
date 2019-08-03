/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(num) {
  var x = "";
  for (i = 1 ; i <= num ; i++) {
    x += "ha";
  }
  return x + "!";
}

console.log(laugh(10));
