function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const container = document.querySelector('#boxes');
const inputAmount = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');

function onGetInputValue() {
  onCreateBox(inputAmount.value);
}

const onCreateBox = value => {
  let arrayBox = [];
  for (let i = 1; i <= value; i += 1) {
    const newDiv = document.createElement('div');
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.style.height = `${i * 10 + 30}px`;
    newDiv.style.width = `${i * 10 + 30}px`;

    arrayBox.push(newDiv);
  }
  container.append(...arrayBox);
};

const onDestroyBox = () => {
  inputAmount.value = 0;
  container.innerHTML = '';
};

createBtn.addEventListener('click', onGetInputValue);
createBtn.addEventListener('click', onCreateBox);
destroyBtn.addEventListener('click', onDestroyBox);
