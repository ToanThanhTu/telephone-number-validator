// Get references to the DOM elements for the numpad buttons
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

// Get references to the input field, check and clear buttons, and the area for displaying results
const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsTextsArea = document.querySelector(".results-texts");

// Function to append the clicked number or symbol to the input field
const addNumberFromNumpad = (num) => userInput.value += num;

// Add click event listeners to each numpad button to add its value to the input field
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

// Function to clear the input field and the results area
const clear = () => {
    userInput.value = "";
    resultsTextsArea.innerHTML = "";
}

// Add click event listener to the clear button to clear the input and results
clearBtn.addEventListener("click", clear);

// Function to add a paragraph indicating the input is a valid US number
const addValidText = () => {
    const resultText = document.createElement("p");
    resultText.classList.add("results-text");
    resultText.innerText = `Valid US number: ${userInput.value}`;
    resultText.style.color = "var(--valid-text)";
    resultsTextsArea.appendChild(resultText);
}

// Function to add a paragraph indicating the input is an invalid US number
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

// Function to check if the input matches the US phone number pattern
const checkPhoneNumber = () => {
    const usPhoneRegex = /^1?\s?(?:\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;

    if (userInput.value.match(usPhoneRegex)) {
        addValidText();
    } else {
        addInvalidText();
    }
}

// Function to validate the user input before checking the phone number
const checkUserInput = () => {
    if (!userInput.value) {
        alert("Please provide a phone number");
        return;
    }

    checkPhoneNumber();
}

// Add click event listener to the check button to validate and check the phone number
checkBtn.addEventListener("click", checkUserInput);