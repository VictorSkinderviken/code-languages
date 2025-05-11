// Hello World!
console.log("Hello, World!");

// Variales and types
const name = "Victor"
let age = 22;
const height = 190;
const weight = 55;

console.log(`\n${name} is ${age}, he is ${height}cm tall and weighs around ${weight}kg.`);

// For loop
console.log("\nFor loop:");
for (let i = 0; i < 5; i++) {
  console.log(`Count: ${i}`);
}

// While loop
console.log("\nWhile loop:");
let count = 0;
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

// Functions 
console.log("\nFunctions:");
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Victor"));