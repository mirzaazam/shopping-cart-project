
function getInputFieldValueFunction(parameter){
    const inputField = document.getElementById(parameter);
    const inputFieldString = inputField.value;
    const inputValue = parseInt(inputFieldString);
    return inputValue;
};

function phonePriceCount(element, value, setValue) {
    const phonePriceUpdate = element * value;
    let getFirstPhonePrice = document.getElementById(setValue);
    const quntityPrice = getFirstPhonePrice.innerText = phonePriceUpdate;
    return quntityPrice;
};

