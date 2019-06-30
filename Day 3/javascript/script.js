let first = document.querySelector("#first_name");
let button = document.querySelector("#button");
let output = document.querySelector("#output");
let placeInput = document.querySelector("#place");
let animalInput = document.querySelector("#animal");

button.addEventListener("click", e => {
  let name = first.value;
  let placeVal = placeInput.value;
  let animalVal = animalInput.value;
  output.innerHTML = `Hello ${name}! You are from ${placeVal} and you like ${animalVal}`;
});
