const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const count = document.querySelector('#value');

let counterValue = 0;

const onReduce = value => {
  counterValue -= 1;
  count.textContent = counterValue;
};
decrementBtn.addEventListener('click', onReduce);

const onIncrease = value => {
  counterValue += 1;
  count.textContent = counterValue;
};
incrementBtn.addEventListener('click', onIncrease);
