const counterValue = document.querySelector('#value');
const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButon = document.querySelector('[data-action="decrement"]');
let currentValue = 0;
incrementButton.addEventListener("click", increment);
decrementButon.addEventListener("click", decrement);
function decrement() {
    currentValue -= 1;
    counterValue.textContent = currentValue;
}
function increment() {
    currentValue += 1;
    counterValue.textContent = currentValue;
};