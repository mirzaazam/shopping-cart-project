
//inpput field increase
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

//calculate quantity price
function priceAdded(value){
    const priceOfCase = document.getElementById('priceCase');
    const priceCount = value * 59;
    priceOfCase.innerText = priceCount;
    return priceCount;
};

//set quantity price in down quantity price
function setCaseingQuantityPrice(putNumber){
    const caseing = document.getElementById('caseing-quantityPrice');
   const caseingPrice = priceAdded(putNumber);
   caseing.innerText = caseingPrice;
}

//event handlar for increase input value
document.getElementById('btn-case-plus').addEventListener('click', function () {
    const putNumber = inputFieldValue(true);
    priceAdded(putNumber);
    setCaseingQuantityPrice(putNumber);
});

//event handlar for decrease input value
document.getElementById('btn-case-minius').addEventListener('click', function () {
    const inputField = document.getElementById('inputField_phn_caseing');
    const inputFieldString = inputField.value;
    const inputValue = parseInt(inputFieldString);
    if (0 < inputValue) {
       const putNumber = inputFieldValue(false);
       priceAdded(putNumber);
       setCaseingQuantityPrice(putNumber);
    }
    

});