/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */

function laugh(num) {
  var x = "";
  for (var i = 1 ; i <= num ; i++) {
    x = x + "ha"; 
    /* He used i as a place holder! 
    Made sure that the condtional made "i" ALWAYS less than the "num."" 
    Nothing inherent in the loop. 
    He used the loop to control the amount
    of times x = x + "ha" was going to be executed, 
    depending on the arguments passed by the parameter num. 
    */
  }
  return x + "!";
}
console.log(laugh(1));