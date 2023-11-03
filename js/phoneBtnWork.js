
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
}

// this function for calculate quntity price.
function phonePriceCount(element, value) {
    const phonePriceUpdate = element * value;
    let getFirstPhonePrice = document.getElementById('phone-price');
    const quntityPrice = getFirstPhonePrice.innerText = phonePriceUpdate;
    return quntityPrice;
};

//set phone per price in phone quantity price.
function elementPriceCount(element){
    const phoneQuantityPrice = document.getElementById('phone-quantityPrice');
    const quntityPrice = phonePriceCount(element, 1219);
    phoneQuantityPrice.innerText = quntityPrice;

};

//eventhandler for pluse button
document.getElementById('plus-btn').addEventListener('click', function () {
    const increageValue = updateInputValue(true);
    phonePriceCount(increageValue, 1219);
    elementPriceCount(increageValue);
});

//eventhandler for minius button.
document.getElementById('minus-btn').addEventListener('click', function () {
    const inputField = document.getElementById('iPhone-inputField');
    const inputFieldString = inputField.value;
    const inputFieldValue = parseInt(inputFieldString);

    //this logic for not found nagetive value in input field.
    if (0 < inputFieldValue) {
        const increageValue = updateInputValue(false);
        phonePriceCount(increageValue, 1219);
        elementPriceCount(increageValue);
    }

});