function inputFieldValue(value){
    const inputField = document.getElementById('case-inputField');
    const inputFieldString = document.getElementById('case-inputField').value;
    const inputFieldValue = parseInt(inputFieldString);

    let putNumber;
    if( value == true ){
        putNumber = inputFieldValue + 1;
    }
    else {
        putNumber = inputFieldValue - 1;
    }

    inputField.value = putNumber;
}


document.getElementById('btn-case-plus').addEventListener('click', function(){
    inputFieldValue(true);
});

document.getElementById('btn-case-minius').addEventListener('click', function(){
    const inputField = document.getElementById('case-inputField');
    const inputFieldString = inputField.value;
    const inputValue = parseInt(inputFieldString);

    if ( 0 < inputValue ){
        inputFieldValue(false);
    }

});