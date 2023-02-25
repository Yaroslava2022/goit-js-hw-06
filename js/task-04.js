

const decrementEl = document.querySelector('button[data-action="decrement"]');
const incrementEl = document.querySelector('button[data-action="increment"]');
const counterEl = document.querySelector('#value');

let counterValue = 0;


const handleDecCounterValue = () => {
counterValue -= 1;
counterEl.textContent = counterValue;
};


decrementEl.addEventListener('click', handleDecCounterValue);

const handleIncCounterValue = () => {
    counterValue += 1;
    counterEl.textContent = counterValue;
};

incrementEl.addEventListener('click', handleIncCounterValue);


