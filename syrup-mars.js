function howManyHundreds(bottles) {
  let x = 0;
  let y = 0;
  let z = 0;
  bottles % 100 === 0 ? x = bottles / 100 : y = bottles % 100;
  z = (bottles - y) / 100;  
  return x || z;
}

console.log(howManyHundreds(325));

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);