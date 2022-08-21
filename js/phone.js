// console.log('phone .js')

function updatePhoneNumber(isIncrease) {
    const phoneNumberField = document.getElementById('phone-number-field');
    const PhoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(PhoneNumberString);
    let newPhoneNumber;
    if (isIncrease) {
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else {
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneNumberField.value = newPhoneNumber;

    return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber) {
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
}




document.getElementById('btn-phone-plus').addEventListener('click', function () {
    // console.log('phone plus button clicked');
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhoneTotalPrice(newPhoneNumber);
    // updatePhoneNumber(newPhoneNumber);

    calculateSubTotal();


});
document.getElementById('btn-phone-minus').addEventListener('click', function () {
    // console.log('phone plus button clicked');
    const newPhoneNumber = updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();


    // updatePhoneNumber(newPhoneNumber);



    // const phoneNumberField = document.getElementById('phone-number-field');
    // const PhoneNumberString = phoneNumberField.value;
    // const previousPhoneNumber = parseInt(PhoneNumberString);
    // const newPhoneNumber = previousPhoneNumber - 1;
    // phoneNumberField.value = newPhoneNumber;
});