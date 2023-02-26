const inputEl = document.querySelector('#validation-input');
const textLength = inputEl.dataset.length;
// const textLenght = inputEl.getAttribute('data-length');

const onCheckTextLength = event => {
  if (event.currentTarget.value.length === Number(textLength)) {
    inputEl.classList.remove('invalid');
    return inputEl.classList.add('valid');
  } else {
    inputEl.classList.remove('valid');
    return inputEl.classList.add('invalid');
  }
};

inputEl.addEventListener('blur', onCheckTextLength);
