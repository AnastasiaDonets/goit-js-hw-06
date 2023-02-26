const inputEl = document.querySelector('#font-size-control');
const textInput = document.querySelector('#text');

const onChangeFontSize = event => {
  textInput.style.fontSize = event.currentTarget.value + 'px';
};

inputEl.addEventListener('input', onChangeFontSize);
