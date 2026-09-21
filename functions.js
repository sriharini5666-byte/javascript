// Function

function greet() {
    console.log("Hello");
}

greet();


// Parameters and Arguments

function introduce(name, age) {
    console.log("My name is " + name);
    console.log("I am " + age + " years old");
}

introduce("Sri", 20);


// Return

function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result);


// Function Expression

const multiply = function(a, b) {
    return a * b;
};

console.log(multiply(5, 4));


// Arrow Function multiline

const subtract = (a, b) => {
    return a - b;
};

console.log(subtract(20, 8));


// Short Arrow Function singleline

const square = number => number * number;

console.log(square(5));