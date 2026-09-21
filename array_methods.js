// forEach

let numbers = [10, 20, 30, 40];

numbers.forEach(number => {
    console.log(number);
});


// map

let marks = [10, 20, 30, 40];

let doubled = marks.map(mark => {
    return mark * 2;
});

console.log(doubled);


// filter

let ages = [16, 20, 17, 25, 15];

let adults = ages.filter(age => {
    return age >= 18;
});

console.log(adults);


// find

let numbers2 = [10, 15, 20, 25, 30];

let found = numbers2.find(number => {
    return number > 20;
});

console.log(found);


// reduce

let numbers3 = [10, 20, 30, 40];

let total = numbers3.reduce((sum, number) => {
    return sum + number;
}, 0);

console.log(total);