export const validateEmail = (email) => {
    // email must contain an @ symbol (validating using regex)
    const validEmail = /@/.test(email);
    if (!validEmail) {
        alert('Please enter a valid email');
        return;
    };
    return true;
};


export const validateOnlyLetters = (name) => {
  const validLetters = /^[A-Za-z]+$/.test(name);
  if (!validLetters) {
        alert('Please enter a valid name');
        return;
    };
    return true;
};

export const validatePostalCode = (postcode) => {
    const validPostcode = /^[A-Za-z]{2}[0-9]{2}\s[0-9][A-Za-z]{2}$/.test(postcode);
    if (!validPostcode) {
        alert('Please enter a valid postcode');
        return;
    };
    return true;
};


export const validateNumber = (numberInput, validLength, inputReason) => {
    // phone number must be 11 long and only digits (validating using regex)
    // card number must be 16 long and only digits (validating using regex)
    // CVC number must be 3 long and only digits (validating using regex)
   
    const onlyNumbers = /^\d+$/.test(numberInput);
    if (!(numberInput.length ==  validLength) | !onlyNumbers) {
        alert(`${inputReason} Number invalid`);
        return;
    }
    return true;
};

