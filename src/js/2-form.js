const formData = { email: "", message: "" };

const form = document.querySelector('.feedback-form');
const email = form.querySelector('.js-email');
const message = form.querySelector('.js-message');

form.addEventListener('input', e => {
    const { name, value } = e.target;
    
    formData[name] = value.trim();

    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
})


const storage = localStorage.getItem("feedback-form-state");

if (storage) {
    const parsedData = JSON.parse(storage);

    formData.email = parsedData.email;
    formData.message = parsedData.message;

    email.value = parsedData.email;
    message.value = parsedData.message;
}

form.addEventListener('submit', e => {
    e.preventDefault();

    if (formData.email.trim() === '' || formData.message.trim() === '') {
        alert('Fill please all fields');
        return;
    }

    console.log(formData);

    localStorage.removeItem("feedback-form-state");

    form.reset();

    formData.email = '';
    formData.message = '';
    
})


