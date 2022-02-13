const counterValue = document.querySelector('#value');
const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButon = document.querySelector('[data-action="decrement"]');
counterValue.textContent = 0;
incrementButton.addEventListener("click", increment);
decrementButon.addEventListener("click", decrement);
function increment() {
    counterValue.textContent++;
};
function decrement() {
    counterValue.textContent--;
};