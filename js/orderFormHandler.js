import { validateOnlyLetters, validateEmail, validateNumber, validatePostalCode } from './formValidation.js';

$(document).ready(function() {
    $('#address-form').on('submit', function(e) {
        e.preventDefault()

        // Get input values and assign to variables
        const firstName = $('#firstName').val();
        const surname = $('#surname').val();
        const email = $('#email').val();
        const phone = $('#phone').val();
        const address = $('#address').val();
        const county = $('#county').val();
        const postcode = $('#postal').val();
        const cardNumber = $('#cardNumber').val();
        const cvc = $('#cvc').val();

        if (!firstName || !surname || !email || !phone || !address || !county || !postcode) {
            alert("Please fill in all the information");
            return;
        }

        const validFirstName = validateOnlyLetters(firstName);
        const validSurname = validateOnlyLetters(surname);
        const validEmail = validateEmail(email);
        const validPhone = validateNumber(phone, 11, "Phone");
        const validPostcode = validatePostalCode(postcode);
        const validCardNumber = validateNumber(cardNumber, 16, "Card");
        const validCVC = validateNumber(cvc, 3, "CVC");


        console.log("Order Details:");
        console.log(`First Name: ${validFirstName}`);
        console.log(`Surname: ${validSurname}`);
        console.log(`Email: ${validEmail}`);
        console.log(`Phone: ${validPhone}`);
        console.log(`Postcode: ${validPostcode}`);

        

        if (!validFirstName || !validSurname || !validEmail || !validPhone || !validPostcode || !validCardNumber || !validCVC) {
            return;
        } else {
            console.log("Order Details:");
            console.log(`First Name: ${firstName}`);
            console.log(`Surname: ${surname}`);
            console.log(`Email: ${email}`);
            console.log(`Phone: ${phone}`);
            console.log(`Address: ${address}`);
            console.log(`County: ${county}`);
            console.log(`Postcode: ${postcode}`);
            alert("Check Out Success");
        };
    });
});