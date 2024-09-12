var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var subjectError = document.getElementById('subject-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName() {
    var name = document.getElementById('name').value;

    if (name.length == 0) {
        nameError.innerHTML = 'Name required';
        return false;
    }
    if (!name.match(/^[A-Za-z\s]+$/)) {
        nameError.innerHTML = 'Write a valid full name';
        return false;
    }
    nameError.innerHTML = '';
    return true;
}

function validateEmail() {
    var email = document.getElementById('email').value;

    if (email.length == 0) {
        emailError.innerHTML = 'Email required';
        return false;
    }
    if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
        emailError.innerHTML = 'Email invalid';
        return false;
    }

    emailError.innerHTML = '';
    return true;
}

function validateSubject() {
    var subject = document.getElementById('subject').value;

    if (subject.length == 0) {
        subjectError.innerHTML = 'Subject required';
        return false;
    }
    if (subject.length > 15) {
        subjectError.innerHTML = 'Make it short';
        return false;
    }

    subjectError.innerHTML = '';
    return true;
}

function validateMessage() {
    var message = document.getElementById('message').value;
    var required = 30;
    var left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = left + ' more characters required';
        return false;
    }

    messageError.innerHTML = '';
    return true;
}

function validateForm() {
    if (!validateName() || !validateEmail() || !validateSubject() || !validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix errors to submit';
        setTimeout(function () { submitError.style.display = 'none'; }, 3000);
        return false;
    }
    return true;
}