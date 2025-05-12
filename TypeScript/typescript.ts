// Hello World!
console.log("Hello, World!");

// Variables with explicit types
const name: string = "Victor";
let age: number = 22;
const height: number = 190;
const weight: number = 55;

console.log(`\n${name} is ${age}, he is ${height}cm tall and weighs around ${weight}kg.`);

// For loop
console.log("\nFor loop:");
for (let i: number = 0; i < 5; i++) {
  console.log(`Count: ${i}`);
}

// While loop
console.log("\nWhile loop:");
let count: number = 0;
while (count < 3) {
  console.log(`Count: ${count}`);
  count++;
}

// Conditions
console.log("\nConditionals:");
if (age < 18) {
  console.log("You're a minor.");
} else if (age >= 18 && age < 65) {
  console.log("You're an adult.");
} else {
  console.log("You're a senior.");
}

// Function with type annotations
console.log("\nFunctions:");
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("Victor"));