const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const forgotLink = document.querySelector('.forgot-password');
const loginForgotLink = document.querySelector('.login-forgot-link');
const changePass = document.querySelector('.change-password');
const changePassLogin = document.querySelector('.changePass-login');

registerLink.onclick = () => {
    wrapper.classList.add('register');
}

loginLink.onclick = () => {
    wrapper.classList.remove('register');
}

forgotLink.onclick = () => {
    wrapper.classList.add('forgot');
}

loginForgotLink.onclick = () => {
    wrapper.classList.remove('forgot');
}

changePass.onclick = () => {
    wrapper.classList.add('change');
}

changePassLogin.onclick = () => {
    wrapper.classList.remove('change');
}