function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
const changeColorButton = document.querySelector('.change-color');
const colorOutput = document.querySelector('.color');
changeColorButton.addEventListener('click', changeBackground);
function changeBackground() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  changeText(newColor);
};
function changeText(text) {
  colorOutput.textContent = text;
};