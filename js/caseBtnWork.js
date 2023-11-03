function inputFieldValue(value) {
    const inputField = document.getElementById('inputField_phn_caseing');
    const inputFieldString = inputField.value;
    const inputFieldValue = parseInt(inputFieldString);

    let putNumber;
    if (value == true) {
        putNumber = inputFieldValue + 1;
    }
    else {
        putNumber = inputFieldValue - 1;
    }

    inputField.value = putNumber;
    return putNumber;
}

function priceAdded(value){
    const priceOfCase = document.getElementById('priceCase');
    const priceCount = value * 59;
    priceOfCase.innerText = priceCount;
};


document.getElementById('btn-case-plus').addEventListener('click', function () {
    const putNumber = inputFieldValue(true);
    priceAdded(putNumber);
});

document.getElementById('btn-case-minius').addEventListener('click', function () {
    const inputField = document.getElementById('inputField_phn_caseing');
    const inputFieldString = inputField.value;
    const inputValue = parseInt(inputFieldString);
    if (0 < inputValue) {
       const putNumber = inputFieldValue(false);
       priceAdded(putNumber);
    }
    

});