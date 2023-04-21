// add menu toggle to bars icon in nav bar
document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > ul").classList.toggle("hidden--mobile");
});

// Event Listener for Form
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", event => {
    event.preventDefault();
    console.log("The form was submitted!");

    console.log("event", event);

    // NOTE: While inputs might look like an array in the console, it's actually an 'array-like' object.
    const inputs = event.target.elements;
    console.log("form's input elements: ", inputs);
    // Notice how in the console, it says "HTMLFormControlsCollection". HTMLCollection

    // NOTE: In order to iterate through an "array-like" object like a HTMLFormControlsCollection, we must convert it to an array. We can do this using Array.from() as shown bellow
    Array.from(inputs).forEach(input => {
      console.log(
        `This input is named ${input.name} and has a value of ${input.value}`
      );
    });
  });
}

// Populating Table through JS
const blocks = [
  { order: "FIRST", text: "Quisque lacinia lorem nec mauris sollicitudin" },
  { order: 2, text: "Aliquam sodales felis sit amet" },
  { order: 3, text: "Aliquam vitae iaculis lorem, vitae" },
  { order: 5, text: "Morbi pharetra ipsum a hendrerit" },
  { order: 4, text: "Sed non orci urna. Duis ac lectus" },
  { order: 6, text: "Nullam quis magna a sem bibendum" },
  { order: 7, text: "Curabitur feugiat est vel commodo" },
  { order: 8, text: "Vestibulum sed lobortis nisi, et" },
  { order: 9, text: "Integer gravida augue massa, et pharetra" },
  { order: 10, text: "Integer a consectetur ipsum. In a leo" },
  { order: 11, text: "Praesent in viverra mi. Curabitur urna" },
  { order: 12, text: "Aenean imperdiet nibh turpis" },
  { order: 13, text: "Donec ac pulvinar leo, nec" },
  { order: 14, text: "Sed a risus posuere, rutrum orci" },
  { order: 15, text: "Sed sollicitudin in eros non pulvinar" },
  { order: 16, text: "Nullam nisl ante, blandit vel" },
  { order: "LAST", text: "posuere justo vitae urna" }
];
function addItemsToBlock() {
  blocks.forEach(block => {
    const newTR = document.createElement("tr");
    const newTD = document.createElement("td");
    newTR.textContent = `${block.order}`;
    newTD.textContent = `${block.text}`;

    document
      .querySelector("#blocks > tbody")
      .appendChild(newTR)
      .appendChild(newTD);
  });
}

// addItemsToBlock();
