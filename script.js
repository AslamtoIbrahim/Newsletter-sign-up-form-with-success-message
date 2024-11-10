const signUpCard = document.getElementById('signUpCard');
const error = document.getElementById('error');
const email = document.getElementById('email');
const emailReceiver = document.getElementById('emailReceiver');
const successCard = document.getElementById('successCard');
const dismiss = document.getElementById('dismiss');
const imgPart = document.getElementById('imgPart');

document.querySelector('form').onsubmit = function (event) {
    event.preventDefault();
    const emailAddress = sentEmail();
    if (emailAddress) {
        receiveEmail(emailAddress);
        // ash@loremcompany.com
        event.submit();
    }
}

function ondismiss() {
    dismissCard();
}

function receiveEmail(emailAddress) {
    signUpCard.style.display = 'none';
    successCard.style.display = 'block';
    emailReceiver.textContent = emailAddress;
}

function dismissCard() {
    signUpCard.style.display = 'flex';
    successCard.style.display = 'none';
    email.value = '';
}

function sentEmail() {
    const inputValue = email.value;
    if (inputValue === '') {
        showErrorMessage('Please enter your email');
        return;
    }

    if (!validateEmail()) {
        showErrorMessage();
        showErrorInput();
        return;
    }

    hideErrorMessage();
    hideErrorInput();
    return inputValue;

}
function validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email.value);
}

function showErrorMessage(message = 'Valid email required') {
    error.textContent = message;
    error.style.display = 'inline';
    error.classList.remove('error-warning');
    void error.offsetWidth;
    error.classList.add('error-warning');
}

function showErrorInput() {
    email.classList.remove('input-warning');
    void email.offsetWidth;
    email.classList.add('input-warning');
}

function hideErrorInput() {
    email.classList.remove('input-warning');
}

function hideErrorMessage() {
    error.style.display = 'none';
}


changeImage();

function changeImage() {

    if (window.innerWidth < 550) {
        imgPart.src = 'assets/images/illustration-sign-up-mobile.svg';
        console.log('width 💛', window.innerWidth);

    } else {
        console.log('width 💜', window.innerWidth);
        imgPart.src = 'assets/images/illustration-sign-up-desktop.svg';
    }

}

window.addEventListener('resize', () => {
    console.log('width', window.innerWidth);
    changeImage();

});