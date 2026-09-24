// Basic Promise

let promise = new Promise(function(resolve, reject) {

    let success = true;

    if (success) {
        resolve("Operation successful");
    } else {
        reject("Operation failed");
    }

});

promise
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    })
    .finally(function() {
        console.log("Operation completed");
    });


// Promise Chaining

Promise.resolve(10)
    .then(function(result) {
        return result * 2;
    })
    .then(function(result) {
        return result + 5;
    })
    .then(function(result) {
        console.log("Chaining:", result);
    });


// Promise.all()

let promise1 = Promise.resolve("User data");
let promise2 = Promise.resolve("Product data");
let promise3 = Promise.resolve("Order data");

Promise.all([promise1, promise2, promise3])
    .then(function(result) {
        console.log("Promise.all:", result);
    })
    .catch(function(error) {
        console.log(error);
    });


// Promise.allSettled()

let task1 = Promise.resolve("Task 1 completed");
let task2 = Promise.reject("Task 2 failed");
let task3 = Promise.resolve("Task 3 completed");

Promise.allSettled([task1, task2, task3])
    .then(function(result) {
        console.log("Promise.allSettled:", result);
    });


// Promise.race()

let first = new Promise(function(resolve) {
    setTimeout(function() {
        resolve("First Promise");
    }, 2000);
});

let second = new Promise(function(resolve) {
    setTimeout(function() {
        resolve("Second Promise");
    }, 1000);
});

Promise.race([first, second])
    .then(function(result) {
        console.log("Promise.race:", result);
    });


// Promise.any()

let request1 = Promise.reject("Request 1 failed");
let request2 = Promise.resolve("Request 2 success");
let request3 = Promise.resolve("Request 3 success");

Promise.any([request1, request2, request3])
    .then(function(result) {
        console.log("Promise.any:", result);
    });


// Fetch API

fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(response) {

        if (!response.ok) {
            throw new Error("Request failed");
        }

        return response.json();
    })
    .then(function(data) {
        console.log("Users:", data);
    })
    .catch(function(error) {
        console.log("Error:", error.message);
    });


// Async and Await

async function getUsers() {

    try {

        let response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Request failed");
        }

        let data = await response.json();

        console.log("Async/Await:", data);

    } catch (error) {

        console.log("Error:", error.message);

    }

}

getUsers();