$(document).ready(function() {
    $("#submit").click(function() {

        // get data from inputs using jquery
        const fName = $('#fName').val();
        const sName = $('#sName').val();
        const email = $('#email').val();
        const phone = $('#phone').val();

        // all inputs must be filled in
        if (!fName|!sName|!email|!phone) {
            alert("Please fill in all the information");
            return;
        }

        // email must contain an @ symbol (validating using regex)
        const validEmail = /@/.test(email);
        if (!validEmail) {
            alert('Please enter a valid email');
            return;
        }

        // phone number must be 11 long and only digits (validating using regex)
        const onlyNumbers = /^\d+$/.test(phone);
        if (!(phone.length ==  11) | !onlyNumbers) {
            alert("Phone Number invalid");
            return;
        }
        alert("Sign Up Success")
    });
})