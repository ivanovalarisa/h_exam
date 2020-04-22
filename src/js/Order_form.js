document.getElementById('btnConfirm').addEventListener('click', function () {
    let orderForm = document.forms.orderForm;

    let firstName = orderForm.elements.firstName.value;
    // console.log(firstName);
    let divWithValidateTextFirst = document.getElementById('formValidateFirstName');
    validateFormOrder(firstName.match(/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u) === null, divWithValidateTextFirst);

    let lastName = orderForm.elements.lastName.value;
    // console.log(lastName);
    let divWithValidateTextLast = document.getElementById('formValidateLastName');
    validateFormOrder(lastName.match(/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u) === null, divWithValidateTextLast);

    let phoneNumber = orderForm.elements.number.value;
    let divWithValidateTextNumber = document.getElementById('formValidatePhoneNumber');
     validateFormOrder(phoneNumber.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/) === null, divWithValidateTextNumber);


    let email = orderForm.elements.email.value;
    let divWithValidateTextEmail = document.getElementById('formValidateEmail');
    validateFormOrder(email.match(/^\w{1,20}[@]?[a-z]{1,6}[.]?[a-z]{1,5}$/) === null , divWithValidateTextEmail);

    let city = orderForm.elements.citySelect.value;
    console.log(city);
    let divWithValidateTextCity = document.getElementById('formValidateCity');
    validateFormOrder(city === '1', divWithValidateTextCity);


    let postOffice = orderForm.elements.newPostOffice.value;
    let divWithValidateTextNewPostOffice = document.getElementById('formValidateNewPostOffice');
    validateFormOrder(postOffice.match(/[№]?[0-9]{1,4}/g ) === null, divWithValidateTextNewPostOffice);

    let comment = orderForm.elements.message.value;
});

function validateFormOrder(condition, divWithValidateText) {
    if (condition) {
        divWithValidateText.classList.remove('formValidateInvisible');
        } else {
        divWithValidateText.classList.add('formValidateInvisible');
        }
}