const validatorInput = document.querySelector('#validation-input');
validatorInput.addEventListener('blur', () => {
    if (validatorInput.value.length === Number(validatorInput.dataset.length)) {
    validatorInput.classList.add('valid');
    validatorInput.classList.remove('invalid');
    } else {
    validatorInput.classList.add('invalid');
    validatorInput.classList.remove('valid');
    }
});