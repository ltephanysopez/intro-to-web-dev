// Welcome to JavaScript! This is a JavaScript comment!
// Our goal for this section is have the ability to click on any of the three boxes
// with ice cream in it and toggle the active class. Let’s begin!


// This specific command is creating a local JavaScript variable that is assigned to
// the id selector #ice-cream1 in our HTML
let ice_cream1 = document.querySelector("#ice-cream1");

// Now that we’ve selected our element in JavaScript, we’ll now focus on adding the
// class name “active” whenever we click our element. To have this ability, we’ll need an eventListener.
ice_cream1.addEventListener("click", e => {
   // Our final snippet is the action that takes place whenever the event occurs—
   // so this code block is saying whenever we click on our first ice cream,
   // we’ll toggle (turn on) the class active.
  ice_cream1.classList.toggle("active");
});

let ice_cream2 = document.querySelector("#ice-cream2");

ice_cream2.addEventListener("click", e => {
  ice_cream2.classList.toggle("active");
});

let ice_cream3 = document.querySelector("#ice-cream3");

ice_cream3.addEventListener("click", e => {
  ice_cream3.classList.toggle("active");
});

/* Let’s do a quick overview of our code:

   1.We select our HTML element through it’s given id
   2.We assign the selected HTML element to a JavaScript variable
   3.We specify what event needs to happen
   4.We specify what action needs to take place when the event occurs

*/
