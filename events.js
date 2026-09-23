let nameInput = document.getElementById("name");
let button = document.getElementById("button");
let form = document.getElementById("myForm");
let message = document.getElementById("message");

nameInput.addEventListener("input", function() {
    console.log(nameInput.value);
});

button.addEventListener("click", function() {
    message.textContent = "Button clicked";
});

form.addEventListener("submit", function(event) {
    event.preventDefault();

    console.log("Form submitted");
});