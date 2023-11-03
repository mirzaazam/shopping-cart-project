document.getElementById('phone-remove').addEventListener('click', function (){
    const phoneRow = document.getElementById('phone-row');
    phoneRow.style.display = 'none';
});

document.getElementById('caseCross').addEventListener('click', function(){
    const rowCase = document.getElementById('row-case');
    rowCase.style.display = 'none';
});