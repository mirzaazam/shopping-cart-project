
//this function for increase input value.
function updateInputValue(value) {

    //get input value from phone field.
    const inputField = document.getElementById('iPhone-inputField');
    const inputFieldString = inputField.value;
    const inputFieldValue = parseInt(inputFieldString);

    //this logic for increase value in input field
    let increageValue;
    if (value == true) {
        increageValue = inputFieldValue + 1;
    }
    else {
        increageValue = inputFieldValue - 1;
    }

    //set value in input field.
    inputField.value = increageValue;
    return increageValue;
};

// this function for calculate quntity price.
function phonePriceCount(element) {
    let getPhonePrice = document.getElementById('phone-price');

    const phonePriceUpdate = element * 1219;
    getPhonePrice.innerText = phonePriceUpdate;
    return phonePriceUpdate;
};

//set phone price down below:
function setphoneQuantityPrice(increageValue) {
    const setCaseingPrice = document.getElementById('phone-quantityPrice');

    const phonePrice = phonePriceCount(increageValue);
    setCaseingPrice.innerText = phonePrice;
};

//eventhandler for pluse button
document.getElementById('plus-btn').addEventListener('click', function () {
    const increageValue = updateInputValue(true);
    phonePriceCount(increageValue);
    setphoneQuantityPrice(increageValue);
    calculateTotal();
});

//eventhandler for minius button.
document.getElementById('minus-btn').addEventListener('click', function () {
    const inputField = document.getElementById('iPhone-inputField');
    const inputFieldString = inputField.value;
    const inputFieldValue = parseInt(inputFieldString);

    //this logic for not found nagetive value in input field.
    if (0 < inputFieldValue) {
        const increageValue = updateInputValue(false);
        phonePriceCount(increageValue);
        setphoneQuantityPrice(increageValue);
        calculateTotal();
    }
});