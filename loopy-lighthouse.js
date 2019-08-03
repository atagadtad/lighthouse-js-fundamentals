for (let x = 100 ; x <= 200 ; x++) {
  x % 3 === 0 && x % 4 === 0 ? console.log("LoopyLighthouse") : 
  (x % 4 === 0 ? console.log("Lighthouse") : 
  (x % 3 === 0 ? console.log("Loopy") : console.log(x)));
}