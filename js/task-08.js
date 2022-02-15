const form = document.querySelector(".login-form");
form.addEventListener("submit", onSubmit);
function onSubmit(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    if (!email.value || !password.value) {
    event.currentTarget.reset();
    return alert("Все поля должны быть заполнены.");
    }
    const formOutput = { email: email.value, password: password.value };
    event.currentTarget.reset();
    return console.log(formOutput);
};
