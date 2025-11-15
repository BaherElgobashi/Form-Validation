# Form Validation

A simple form validation project using HTML, CSS, and JavaScript.

## Features and Functionality

This project provides client-side form validation for the following fields:

*   **Full Name:**  Validates that the name field is not empty and contains a first and last name.
*   **Phone Number:** Validates that the phone number field is not empty, is exactly 10 digits long, and contains only digits.
*   **Email ID:** Validates that the email field is not empty and is in a valid email format.
*   **Your Message:** Validates that the message field contains at least 30 characters.

The validation is performed dynamically as the user types in each field using the `onkeyup` event.  Error messages are displayed next to the respective input fields if the validation fails, and success messages are displayed when the input is valid. A general error message appears if any of the fields are invalid when the form is submitted.

## Technology Stack

*   **HTML:**  Structure of the form (`index.html`).
*   **CSS:**  Styling of the form (`style.css` - file not provided, so assume standard CSS).
*   **JavaScript:**  Form validation logic (`main.js`).
*   **Font Awesome:** Used for the checkmark icon (included via CDN).

## Prerequisites

A web browser is required to run this project. No special software or libraries need to be installed.

## Installation Instructions

1.  Clone the repository:

    ```bash
    git clone https://github.com/BaherElgobashi/Form-Validation.git
    ```

2.  Navigate to the project directory:

    ```bash
    cd Form-Validation
    ```

3.  Open `index.html` in your web browser.

## Usage Guide

1.  Open `index.html` in your web browser.
2.  Fill out the form fields.
3.  As you type, the form will validate each field and display error or success messages.
4.  Click the "Submit" button.
    *   If all fields are valid, the form will *appear* to submit (no actual submission is handled).
    *   If any fields are invalid, an error message will be displayed below the submit button.

## API Documentation

This project does not have a backend API.  All validation logic is handled client-side in `main.js`.

## Contributing Guidelines

Contributions are welcome! To contribute to this project, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes.
4.  Test your changes thoroughly.
5.  Submit a pull request.

Please ensure your code adheres to the existing style and conventions.

## License Information

This project does not specify a license.  All rights are reserved unless otherwise specified.

## Contact/Support Information

For any questions or support, please contact:

BaherElgobashi:  (No contact information provided in source code - consider adding email or relevant links to author).  You can raise issues directly on the GitHub repository: [https://github.com/BaherElgobashi/Form-Validation](https://github.com/BaherElgobashi/Form-Validation)