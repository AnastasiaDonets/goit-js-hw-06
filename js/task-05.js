const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

const onIsEntered = event => {
  textOutput.textContent = event.currentTarget.value;
  if (event.currentTarget.value === '') {
    return (textOutput.textContent = 'Anonymous');
  }
};

textInput.addEventListener('input', onIsEntered);
