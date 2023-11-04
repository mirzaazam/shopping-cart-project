
//get Value from dwon point
function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
};

//set value process
function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
};

//Total calculate 
function calculateTotal() {
    //get phone & caseing price 
    const phonePrice = getTextElementValueById('phone-quantityPrice');
    const caseingPrice = getTextElementValueById('caseing-quantityPrice');

    //addition with phonePrice and CaseingPrice than set subtotal point
    const subTotalCount = phonePrice + caseingPrice;
    setTextElementValueById('Subtotal', subTotalCount);

    //calculate tax 
    const taxAmountString = (subTotalCount * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax', taxAmount);

    //Total calculate 
    const totalCount = subTotalCount + taxAmount;
    setTextElementValueById('total', totalCount);
};