// Hello World!
console.log("Hello, World!");
// Variables with explicit types
var name = "Victor";
var age = 22;
var height = 190;
var weight = 55;
console.log("\n".concat(name, " is ").concat(age, ", he is ").concat(height, "cm tall and weighs around ").concat(weight, "kg."));
// For loop
console.log("\nFor loop:");
for (var i = 0; i < 5; i++) {
    console.log("Count: ".concat(i));
}
// While loop
console.log("\nWhile loop:");
var count = 0;
while (count < 3) {
    console.log("Count: ".concat(count));
    count++;
}
// Conditions
console.log("\nConditionals:");
if (age < 18) {
    console.log("You're a minor.");
}
else if (age >= 18 && age < 65) {
    console.log("You're an adult.");
}
else {
    console.log("You're a senior.");
}
// Function with type annotations
console.log("\nFunctions:");
function greet(name) {
    return "Hello, ".concat(name, "!");
}
console.log(greet("Victor"));
