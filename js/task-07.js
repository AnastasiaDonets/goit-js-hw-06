const inputEl = document.querySelector('#font-size-control');
const textInput = document.querySelector('#text');
console.log(textInput.textContent);

const onChangeFontSize = event => {
  textInput.style.fontSize = event.currentTarget.value + 'px';
};

inputEl.addEventListener('input', onChangeFontSize);
