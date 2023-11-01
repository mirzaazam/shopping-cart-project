function updateInputValue(value) {
    const inputField = document.getElementById('iPhone-inputField');
    const inputFieldString = inputField.value;
    const inputFieldValue = parseInt(inputFieldString);

    let increageValue;
    if (value == true) {
        increageValue = inputFieldValue + 1;
    }
    else {
        increageValue = inputFieldValue - 1;
    }
    inputField.value = increageValue;
}


document.getElementById('plus-btn').addEventListener('click', function () {
    updateInputValue(true);
    // const phoneInputValue = inputFieldValueFunction(iPhone-inputField);
    
    const inputField = document.getElementById('iPhone-inputField');
    const inputFieldString = inputField.value;
    const inputFieldValue = parseInt(inputFieldString);

    const phonePrice = document.getElementById('phone-price');
    const phonePriceTotal = inputFieldValue * 1219;
    phonePrice.innerText = phonePriceTotal;
});

document.getElementById('minus-btn').addEventListener('click', function () {

    const inputField = document.getElementById('iPhone-inputField');
    const inputFieldString = inputField.value;
    const inputFieldValue = parseInt(inputFieldString);

    const phonePrice = document.getElementById('phone-price');
    const phonePriceTotal = inputFieldValue * 1219;
    phonePrice.innerText = phonePriceTotal;
    
    if (0 < inputFieldValue) {
        updateInputValue(false);
    }

});