"use strict";

const display = document.querySelector('#balance-display');
const depositAmount = document.querySelector('#deposit-input');
const withdrawAmount = document.querySelector('#withdraw-input');
const depositBtn = document.querySelector('#deposit-btn');
const withdrawBtn = document.querySelector('#withdraw-btn');

const errorForDeposit = document.querySelector('#deposit-error-msg');
const errorForWithdraw = document.querySelector('#withdraw-error-msg');

const transactionDisplay = document.querySelector('#transaction-history');
// errorForWithdraw.style.display= 'block';

let balance = 0.00;
display.innerText = balance;

// console.log(display, depositAmount, withdrawAmount, depositBtn, withdrawBtn);

display.addEventListener('loadend', ()=>{
  
})

depositBtn.addEventListener('click', ()=>{
  let messages = [];

  function errorHandel() {
    if (messages.length > 0) {
      errorForDeposit.style.display= 'block'
      errorForDeposit.innerText = messages.join(',');
    }
    else if (messages.length <= 0) {
      errorForDeposit.style.display= 'none'
    }
  }
    // transaction printer 
  function transactionPrinter (amount) {
    let transDis =  document.createElement('p');
    transDis.innerText = 'Deposit ' + amount + ' taka';
    transactionDisplay.append(transDis);
  }

  let depositAmountValue = depositAmount.value;
  const depositAmountValueNumber = parseFloat(depositAmountValue);
  
  // console.log(depositAmountValueNumber);
  // console.log(isNaN(depositAmountValueNumber));

  if ( isNaN(depositAmountValueNumber) == true || depositAmountValue == '') {

    messages.push('please input number');
    errorHandel();
  }
  // else if ( typeof depositAmountValueNumber != nu )

  else if (depositAmountValueNumber < 0 ) {
    messages.push("you can't give negatve value");
    errorHandel();
  }
  else {
    balance = balance + depositAmountValueNumber;
    display.innerText = balance;
    // console.log('hi');
    errorHandel();
    transactionPrinter(depositAmountValue);
    depositAmount.value = '';
    console.log(depositAmount.value);

  }
  // console.log(typeof depositAmountValue);
})

withdrawBtn.addEventListener('click', ()=>{
  let messages = [];

  function errorHandel() {
    if (messages.length > 0) {
      errorForWithdraw.style.display= 'block'
      errorForWithdraw.innerText = messages.join(',');
    }
    else if (messages.length <= 0) {
      errorForWithdraw.style.display= 'none'
    }
  }
  // transaction printer 
  function transactionPrinter (amount) {
    let transDis =  document.createElement('p');
    transDis.innerText = 'Withdraw ' + amount + ' taka';
    transactionDisplay.append(transDis);
  }

  let withdrawAmountValue = withdrawAmount.value;
  const withdrawAmountValueNumber = parseFloat(withdrawAmountValue);

  if (isNaN(withdrawAmountValueNumber) == true || withdrawAmountValue == '') {
    messages.push('please input number');
    errorHandel();
  }
  else if ( withdrawAmountValueNumber < 0) {
    messages.push("you can't give negatve value");
    errorHandel();
  }
  else if ( withdrawAmountValueNumber > balance ) {
    messages.push("You don't have sufficient balance");
    errorHandel();
  }
  else {
    balance = balance - withdrawAmountValueNumber;
    display.innerText = balance;
    errorHandel();
    transactionPrinter(withdrawAmountValue);
    withdrawAmount.value = '';
    console.log('operation working');
  }
})

