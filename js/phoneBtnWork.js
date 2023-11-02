
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
    return increageValue;
}

function phonePriceCount(element) {
    const phonePriceUpdate = element * 1219;
    let getFirstPhonePrice = document.getElementById('phone-price');
    getFirstPhonePrice.innerText = phonePriceUpdate;
};

document.getElementById('plus-btn').addEventListener('click', function () {
    const increageValue = updateInputValue(true);
    phonePriceCount(increageValue);
});

document.getElementById('minus-btn').addEventListener('click', function () {
    const inputField = document.getElementById('iPhone-inputField');
    const inputFieldString = inputField.value;
    const inputFieldValue = parseInt(inputFieldString);

    if (0 < inputFieldValue) {
        const increageValue = updateInputValue(false);
        phonePriceCount(increageValue);
    }

});