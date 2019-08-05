function calculateRectangleArea(length, width) {
  let area1 = "";
  length >= 0 && width >= 0 ? area1 = length * width : area1 = undefined;
  return area1;
}

function calculateTriangleArea(base, height) {
  let area2 = "";
  base >= 0 && height >= 0 ? area2 = (base * height) / 2 : area2 = undefined;
  return area2; 
}

function calculateCircleArea(radius) {
  let area3 = ""; 
  radius >= 0 ? area3 =  Math.PI * Math.pow(radius, 2) : area3 = undefined;
  return area3; 
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined
