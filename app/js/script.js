"use strict";

const loginSubmitBtn = document.querySelector('#submit-btn');
const passwordInput = document.querySelector('#password-input');
const usernameInput = document.querySelector('#username-input');

loginSubmitBtn.addEventListener('click', (e)=>{
  const usernameInputValue = usernameInput.value;
  const passwordInputValue = passwordInput.value;
  let validUser = false;
  let invalidUser = false;
  if (usernameInputValue == '' || passwordInputValue == '') {
    return;
  }

  for (let i = 0; i < users.length; i++) {
    if (users[i].userName == usernameInputValue && users[i].password == passwordInputValue) {
      validUser = true;
      break;
    } 
    else {
      // e.preventDefault();
      invalidUser = true;
    }
  }

  if (validUser) {
    window.location.href = './src/pages/bank.html';
  }
  else{
    loginSubmitBtn.style.background = 'red';
    loginSubmitBtn.style.color = 'black';

    console.log('username: ', usernameInputValue, ' and ', 'password: ',passwordInputValue);
    console.log('User is not valid');
  }
})
let pass = passwordInput.addEventListener('keyup', ()=>{
  const passwordInputValue = passwordInput.value;

  if (passwordInputValue.length > 0 ) {
    loginSubmitBtn.style.color = 'hotpink';
  }
  else {
    loginSubmitBtn.style.color = 'dimgray';
  }

})

