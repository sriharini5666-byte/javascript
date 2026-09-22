// getElementById

let title = document.getElementById("title");

console.log(title);


// querySelector with ID

let heading = document.querySelector("#title");

console.log(heading);


// querySelector with class

let message = document.querySelector(".message");

console.log(message);


// querySelectorAll

let messages = document.querySelectorAll(".message");

console.log(messages);


// Change content

title.textContent = "Welcome Sri";

message.innerHTML = "<b>Hello</b>";


// Change style

title.style.color = "blue";
title.style.fontSize = "30px";

messages[0].textContent = "First message";
messages[1].textContent = "Second message";