function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // Type checking works correctly
console.log(result1); // Output: 8

let result2 = subtract(10, 5); // Type checking works correctly
console.log(result2); // Output: 5

// The following line is problematic due to type inference
let result3 = add(5, "3");
console.log(result3); //Output: 53 - No type error, unexpected behavior