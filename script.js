const num1Btn = document.getElementById("num1");
const num2Btn = document.getElementById("num2");
const num3Btn = document.getElementById("num3");
const num4Btn = document.getElementById("num4");
const num5Btn = document.getElementById("num5");
const num6Btn = document.getElementById("num6");
const num7Btn = document.getElementById("num7");
const num8Btn = document.getElementById("num8");
const num9Btn = document.getElementById("num9");
const num0Btn = document.getElementById("num0");
const openParenthesisBtn = document.getElementById("open-parenthesis");
const closeParenthesisBtn = document.getElementById("close-parenthesis");
const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsTextsArea = document.getElementById("results-div");

const addNumberFromNumpad = (num) => userInput.value += num;

num0Btn.addEventListener("click", () => addNumberFromNumpad(num0Btn.innerText));
num1Btn.addEventListener("click", () => addNumberFromNumpad(num1Btn.innerText));
num2Btn.addEventListener("click", () => addNumberFromNumpad(num2Btn.innerText));
num3Btn.addEventListener("click", () => addNumberFromNumpad(num3Btn.innerText));
num4Btn.addEventListener("click", () => addNumberFromNumpad(num4Btn.innerText));
num5Btn.addEventListener("click", () => addNumberFromNumpad(num5Btn.innerText));
num6Btn.addEventListener("click", () => addNumberFromNumpad(num6Btn.innerText));
num7Btn.addEventListener("click", () => addNumberFromNumpad(num7Btn.innerText));
num8Btn.addEventListener("click", () => addNumberFromNumpad(num8Btn.innerText));
num9Btn.addEventListener("click", () => addNumberFromNumpad(num9Btn.innerText));
openParenthesisBtn.addEventListener("click", () => addNumberFromNumpad(openParenthesisBtn.innerText));
closeParenthesisBtn.addEventListener("click", () => addNumberFromNumpad(closeParenthesisBtn.innerText));

const clear = () => {
    userInput.value = "";
    resultsTextsArea.innerHTML = "";
}

clearBtn.addEventListener("click", clear);

const addValidText = () => {
    const resultText = document.createElement("p");
    resultText.classList.add("results-text");
    resultText.innerText = `Valid US number: ${userInput.value}`;
    resultText.style.color = "var(--valid-text)";
    resultsTextsArea.appendChild(resultText);
}

const addInvalidText = () => {
    // resultsTextsArea.innerHTML += `
    //     <p class="results-text">Valid US number: ${userInput.value}</p>
    // `;
    const resultText = document.createElement("p");
    resultText.classList.add("results-text");
    resultText.innerText = `Invalid US number: ${userInput.value}`;
    resultText.style.color = "var(--invalid-text)";
    resultsTextsArea.appendChild(resultText);
}

const checkPhoneNumber = () => {
    const usPhoneRegex = /^1?\s?(?:\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;

    if (userInput.value.match(usPhoneRegex)) {
        addValidText();
    } else {
        addInvalidText();
    }
}

const checkUserInput = () => {
    if (!userInput.value) {
        alert("Please provide a phone number");
        return;
    }

    checkPhoneNumber();
}

checkBtn.addEventListener("click", checkUserInput);