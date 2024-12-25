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

// Improved type safety using explicit type assertions or checks
let num1:number = 5;
let num2:number = parseInt("3");
let result3 = add(num1, num2); // Type checking prevents errors
console.log(result3); //Output: 8

if(typeof num1 === 'number' && typeof num2 === 'number'){
    let result4 = add(num1, num2);
    console.log(result4); //Output: 8
}

//Another way to handle the type checking
let result5 = add(5, Number("3"));
console.log(result5); //Output: 8