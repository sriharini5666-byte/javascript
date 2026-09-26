// Basic Arrow Function

let greet = () => {
    console.log("Hello Sri Harini");
};

greet();


// Arrow Function with Parameter

let greetUser = (name) => {
    return "Hello " + name;
};

console.log(greetUser("Sri"));


// Arrow Function with Multiple Parameters

let add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));


// Short Arrow Function

let square = number => number * number;

console.log(square(5));


// Arrow Function with Array

let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(number => number * 2);

console.log(doubled);


// Arrow Function with Filter

let ages = [15, 20, 17, 25, 16, 30];

let adults = ages.filter(age => age >= 18);

console.log(adults);