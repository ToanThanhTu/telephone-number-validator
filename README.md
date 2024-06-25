# Telephone Number Validator

This project is a simple web application designed to validate US telephone numbers. It provides a user-friendly interface with a numeric keypad for inputting phone numbers, and it checks the validity of the entered numbers according to the US telephone number format.

## Features

- **Numeric Keypad**: A virtual numeric keypad including numbers 0-9 and parentheses for user input.
- **Real-Time Validation**: Validates the phone number in real-time as the user types or inputs numbers using the keypad.
- **Validation Feedback**: Provides immediate feedback on whether the entered phone number is valid or invalid according to US standards.
- **Clear Input**: Allows users to clear the input field and validation feedback with a single click.

## How It Works

The application uses regular expressions to validate the format of the phone numbers entered by the user. A valid US phone number is defined as follows:

- May start with 1 or not (optional).
- Can include spaces, dots, or hyphens as separators between number groups.
- Can have parentheses around the area code.
- Must have a total of 10 digits if not including the country code (1), or 11 digits if including the country code.

## Setup

To run this project locally, follow these steps:

1. Clone the repository to your local machine.
2. Open the project folder in your preferred code editor.
3. Open the `index.html` file in a web browser to view the application.

## Usage

1. Use the on-screen numeric keypad or your keyboard to enter a US phone number into the input field.
2. The application will automatically validate the phone number as you type.
3. The result of the validation (valid or invalid) will be displayed below the input field.
4. Use the "Clear" button to reset the input field and validation result.

## Technologies Used

- HTML
- CSS
- JavaScript