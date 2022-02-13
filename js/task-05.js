

const text = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

text.addEventListener("input", (event) => {
    output.textContent = event.currentTarget.value;

if (event.currentTarget.value === "") {
    output.textContent = "Anonymous";
}
});

// if(!event) {'Anonymos'};