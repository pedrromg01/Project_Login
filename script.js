const wrapper = document.querySelector('.wrapper');
const wrapperForgot = document.querySelector('.wrapper-forgot');

const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const forgotLink = document.querySelector('.forgot-password-link');
const forgotLoginLink = document.querySelector('.login-link-forgot');

const btnPopup = document.querySelector('.btnLogin-popup'); // Corrigido aqui
const iconClose = document.querySelector('.icon-close');

//VARIAVEIS//


registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

forgotLink.addEventListener('click', ()=> {
    wrapperForgot.classList.add('new');
});

forgotLoginLink.addEventListener('click', ()=> {
    wrapperForgot.classList.remove('new');
})

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});
