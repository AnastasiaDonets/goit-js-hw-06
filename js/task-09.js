const span = document.querySelector('.color');
const btn = document.querySelector('.change-color');
const body = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const onChangeColor = event => {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  span.textContent = newColor;
};

btn.addEventListener('click', onChangeColor);
