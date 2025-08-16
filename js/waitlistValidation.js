import { validateOnlyLetters, validateEmail, validateNumber, validatePostalCode } from './formValidation.js';

$(document).ready(function() {
    $('#waitlistForm').on('submit', function(e) {
        e.preventDefault()

        // Get input values and assign to variables
        const firstName = $('#fName').val();
        const surname = $('#sName').val();
        const email = $('#email').val();
        const phone = $('#phone').val();

        if (!firstName || !surname || !email || !phone) {
            alert("Please fill in all the information");
            return;
        }

        const validFirstName = validateOnlyLetters(firstName);
        const validSurname = validateOnlyLetters(surname);
        const validEmail = validateEmail(email);
        const validPhone = validateNumber(phone, 11, "Phone");

        if (!validFirstName || !validSurname || !validEmail || !validPhone) {
            return;
        } else {
            console.log("Waitlist Details:");
            console.log(`First Name: ${firstName}`);
            console.log(`Surname: ${surname}`);
            console.log(`Email: ${email}`);
            console.log(`Phone: ${phone}`);
            alert("Sign Up Successful");
        };
    });
});