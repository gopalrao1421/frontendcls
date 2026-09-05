 function thismessage() {
     alert("Hello JavaScript!");
 }

 let message = "This is Frontend";
 console.log(message);
console.dir(document);
 //1. COMMENTS
 // This program demonstrates JavaScript basics

// 2. VARIABLES
 let name = "Gopal";
 let age = 18;
 const country = "India";
 console.log(name);
 console.log(age);
 console.log(country);

// 3. DATA TYPES
 let greeting = "Hello";          // String
 let marks = 90;                 // Number
 let isStudent = true;           // Boolean
 let value = null;               // Null
 let result; 
 console.log(result);            // Undefined
 console.log(typeof message);    // String
 console.log(typeof marks);
 // 4. OPERATORS
 let a = 10;
 let b = 5;

 let sum = a + b;                // Arithmetic operator
 let isGreater = a > b;          // Comparison operator
 let check = a === b;                // Equality operator
 console.log(sum);
 console.log(isGreater);
 console.log(check);

//  5. TYPE CONVERSION
    let numberText = "100";100
    let convertedNumber = Number(numberText);

    let score = 95;
    let scoreText = String(score);
    console.log(convertedNumber);
    console.log(scoreText);

 // 6. INPUT AND OUTPUT
 let userName = prompt("Enter your name:");
 console.log("Welcome " + userName);
 alert("Hello " + userName);

 // 7. CONTROL STATEMENTS
 if (age >= 18) {
     console.log("You are an Adult");
 } else {
     console.log("You are a Minor");
 }

 // Loop
 for (let i = 1; i <= 3; i++) {
     console.log("Number: " + i);
 }
 // 8. FUNCTIONS
 function greet(name) {
     return "Hello, " + name;
 }

 console.log(greet(userName));

 // 9. ARRAY
 let fruits = ["Apple", "Banana", "Mango"];

 console.log(fruits[0]); // Apple

for (let fruit of fruits) {
     console.log(fruit);
}

 // 10. OBJECT
let student = {
    name: "Ravi",
    age: 20,
    course: "JavaScript"
};

console.log(student.name);
 console.log(student.course);