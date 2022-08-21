// console.log("case js file added")

// optional 
function updateCaseNumber(isIncrease) {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    let newCaseNumber;
    if (isIncrease === true) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;

    return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}


// step 01
document.getElementById('btn-case-plus').addEventListener('click', function () {

    const newCaseNumber = updateCaseNumber(true);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
    // console.log("case js file added")
    // const caseNumberField = document.getElementById('case-number-field');
    // const caseNumberString = caseNumberField.value;
    // const previousCaseNumber = parseInt(caseNumberString);
    // const newCaseNumber = previousCaseNumber + 1;
    // caseNumberField.value = newCaseNumber;
    // // console.log(newCaseNumber);

});
// step 02

document.getElementById('btn-case-minus').addEventListener('click', function () {

    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
    // console.log("case js file added")
    // const caseNumberField = document.getElementById('case-number-field');
    // const caseNumberString = caseNumberField.value;
    // const previousCaseNumber = parseInt(caseNumberString);
    // const newCaseNumber = previousCaseNumber - 1;
    // caseNumberField.value = newCaseNumber;
    // console.log(newCaseNumber);

});