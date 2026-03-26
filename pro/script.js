const increaseBtn = document.querySelector('.counter__button--increase');
const decreaseBtn = document.querySelector('.counter__button--decrease');
const resetBtn = document.querySelector('.counter__reset-button');
const counterValue = document.querySelector('.counter__value');

const message = document.querySelector('.counter__message'); // add this in HTML

const MIN = 0;
const MAX = 5;

// Helpers
const getValue = () => Number(counterValue.textContent);

const setValue = (value) => {
    counterValue.textContent = value;
};

const toggleUI = (value) => {
    if (value >= MAX) {
        counterValue.style.display = "none";
        message.textContent = "Limit! Buy Pro for greater than 5 🚀";
        message.style.display = "block";
    } else {
        counterValue.style.display = "block";
        message.style.display = "none";
    }
};

const updateValue = (delta) => {
    let newValue = getValue() + delta;

    if (newValue < MIN) newValue = MIN;
    if (newValue > MAX) newValue = MAX;

    setValue(newValue);
    toggleUI(newValue);
};

// Events
increaseBtn.addEventListener("click", () => updateValue(1));
decreaseBtn.addEventListener("click", () => updateValue(-1));

resetBtn.addEventListener("click", () => {
    setValue(0);
    toggleUI(0);
});