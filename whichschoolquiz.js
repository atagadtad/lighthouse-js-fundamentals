const whichSchool  = function (age) {
  /* Asking if age is below 13, if so they'll go to Elementary School. 
  I inputted a 2nd conditonal within the falsey space of the 1st conditional 
  to ask if: they're between the age of 13 - 18. If not, then they'll be going 
  to Lighthouse Labs!
  */
  let school = '';
  age < 13 ? school = 'Elementary School' : (age < 18 ? school = 'Secondary School' : school = 'Lighthouse Labs');
  return school;
}
age = 14;
console.log(`If I am ${age}, then I'll be going to ${whichSchool(age)}!`);