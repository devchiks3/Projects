const increaseButtonE1 = document.querySelector('.counter__button--increase');
const decreaseButtonE1 = document.querySelector('.counter__button--decrease');
const resetButtonE1 = document.querySelector(".counter__reset-button");
const counterValueE1 = document.querySelector(".counter__value");

// Reset
resetButtonE1.addEventListener("click", function () {
    counterValueE1.textContent = 0;
});

// Decrease
decreaseButtonE1.addEventListener("click", function () {
    const currentValue = counterValueE1.textContent;
    const currentValueAsNumber = +currentValue;
    let newValue = currentValueAsNumber - 1;

    if (newValue < 0) {
        newValue = 0;
    }

    counterValueE1.textContent = newValue;
});

// Increase
increaseButtonE1.addEventListener("click", function () {
    const currentValue = counterValueE1.textContent;
    const currentValueAsNumber = +currentValue;
    let newValue = currentValueAsNumber + 1;

    if (newValue > 5) {
        newValue = 5;
    }

    counterValueE1.textContent = newValue;
});


// ✅ KEYBOARD CONTROL ADDED HERE
document.addEventListener("keydown", function (e) {
    
    // prevent page scrolling
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        e.preventDefault();
    }

    // Increase (↑)
    if (e.key === "ArrowUp") {
        increaseButtonE1.click();
    }

    // Decrease (↓)
    if (e.key === "ArrowDown") {
        decreaseButtonE1.click();
    }

    // Reset (R key)
    if (e.key.toLowerCase() === "r") {
        resetButtonE1.click();
    }
});