// if statement

let age = 20;

if (age >= 18) {
    console.log("Eligible to vote");
}


// if else

let number = 7;

if (number % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}


// if else if

let mark = 85;

if (mark >= 90) {
    console.log("Grade A");
} else if (mark >= 75) {
    console.log("Grade B");
} else if (mark >= 60) {
    console.log("Grade C");
} else if (mark >= 40) {
    console.log("Grade D");
} else {
    console.log("Fail");
}


// Multiple conditions

let userAge = 20;
let hasID = true;

if (userAge >= 18 && hasID) {
    console.log("Entry allowed");
} else {
    console.log("Entry denied");
}


// Nested if

let username = "Sri";
let password = "1234";

if (username === "Sri") {
    if (password === "1234") {
        console.log("Login successful");
    } else {
        console.log("Wrong password");
    }
} else {
    console.log("Wrong username");
}


// switch

let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid day");
}


// Ternary condition

let studentAge = 19;

let message = studentAge >= 18 ? "Adult" : "Minor";

console.log(message);