// Variables and Data Types
let name = "John Doe";
let age = 25;
let isStudent = true;
let hobbies = ["reading", "coding", "hiking"];
let person = {firstName: "Jane", lastName: "Doe", age: 30};

console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`Person: ${JSON.stringify(person)} (Type: ${typeof person})`);

// Calculator Function
function calculator() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let operation = prompt("Choose an operation (+, -, *, /):");

    let result;
    if (operation === "+") {
        result = num1 + num2;
    } else if (operation === "-") {
        result = num1 - num2;
    } else if (operation === "*") {
        result = num1 * num2;
    } else if (operation === "/") {
        result = num1 / num2;
    } else {
        alert("Invalid operation");
        return;
    }

    alert(`Result: ${result}`);
}

// Greet User Function
function greetUser(name) {
    return `Hello, ${name}! Welcome to our site.`;
}

// DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
    // Call Calculator Function
    calculator();

    // Greet User
    let greetingMessage;
    greetingMessage = greetUser("Amos");
    document.getElementById("dynamic-content").innerText = greetingMessage;

    // Age Check for Voting
    let age = parseInt(prompt("Enter your age:"));
    let message;
    if (age >= 18) {
        message = "You are eligible to vote.";
    } else {
        message = "You are not eligible to vote.";
    }
    document.getElementById("dynamic-content").innerText += `\n${message}`;

    // Loop to Display Numbers
    let ol = document.createElement("ol");
    for (let i = 1; i <= 10; i++) {
        let li = document.createElement("li");
        li.innerText = i;
        ol.appendChild(li);
    }
    document.getElementById("dynamic-content").appendChild(ol);

    // Changing the text of the <h1> element
    document.querySelector("h1").innerText = "JavaScript in Action!";

    // Adding a new <p> inside the #dynamic-content <div>
    let newParagraph = document.createElement("p");
    newParagraph.innerText = "This content was added dynamically using JavaScript.";
    document.getElementById("dynamic-content").appendChild(newParagraph);
});
