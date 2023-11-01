
function inputFieldValueFunction(parameter){
    const inputField = document.getElementById(parameter);
    const inputFieldString = inputField.value;
    const inputValue = parseInt(inputFieldString);
    return inputValue;
};