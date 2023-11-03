


function finalCalculate(){
    const total = document.getElementById('total');
    const increageValue = updateInputValue(true);
    const phoneFinalPrice = elementPriceCount(increageValue)
    const putNumber = inputFieldValue(true);
    const caseingFinalValue = priceAdded(putNumber)
    const result = phoneFinalPrice + caseingFinalValue;
    total.innerText = result;
    
}