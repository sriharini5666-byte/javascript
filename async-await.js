let getUserData = new Promise((resolve, reject) => {

    let success = true;

    if (success) {
        resolve("User data received");
    } else {
        reject("Failed to get user data");
    }

});


// Using then and catch

getUserData
    .then(result => {
        console.log(result);
        return "Processing user data";
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log("Error:", error);
    })
    .finally(() => {
        console.log("Request completed");
    });


// Using async and await

async function fetchUserData() {

    try {

        let result = await getUserData;

        console.log("Async/Await:", result);

    } catch (error) {

        console.log("Error:", error);

    }

}

fetchUserData();