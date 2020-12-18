'use strict';

//ELEMENTS
const welcomeText = document.querySelector('.welcome');
const logo = document.querySelector('.logo');
const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const login = document.querySelector('.login');
const loginInput = document.querySelector('.login__input');
const loginInputUser = document.querySelector('.login__input--user');
const loginInputPin = document.querySelector('.login__input--pin');

const balance = document.querySelector('.balance');
const balanceDate = document.querySelector('.balance__date');

const movementsRow = document.querySelector('.movements__row');
const movementsType = document.querySelector('movements__type');
const movementsTypeDeposite = document.querySelector(
  'movements__type--deposite'
);
const movementsTypeWithdrawal = document.querySelector(
  'movements__type--withdrawal'
);
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelMovements = document.querySelector('.movements__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelLoan = document.querySelector('.form__input--loan-amount');
const labelAmount = document.querySelector('.form__input--amount');
const labelPerson = document.querySelector('.form__input--to');

const btnSort = document.querySelector('.btn--sort');
const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
//CREATE PERSON

const person1 = {
  fullName: 'Joe',
  password: '1111',
  currentMoney: 1250,
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
};
const person2 = {
  fullName: 'Nick',
  password: '2222',
  currentMoney: 2250,
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
};

//user
const users = [person1, person2];
const user = [];

for (const u of users) {
  user.push(u);
}
console.log(user);

//output is an array an inside of it there exist 2 object
//Listing Movements
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    var checkDeposit = mov > 0 ? 'deposit' : 'withdrawal';

    const addMovements = ` <div class="movements__row">
    <div class="movements__type movements__type--${checkDeposit}">
      ${i + 1} ${checkDeposit}
    </div>
    <div class="movements__value">${mov}€</div>
  </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', addMovements); //insertAdjacentHTML()->methodu içine iki string alır biri pozisyon ile ilgilidir.
  });
};
//Login,Display

btnLogin.addEventListener('click', function () {
  if (
    loginInputUser.value.toLowerCase() === person1.fullName.toLowerCase() &&
    loginInputPin.value === person1.password
  ) {
    console.log(
      `Welcome ${person1.fullName} Your current money :${person1.currentMoney}€ `
    );
    displayMovements(person1.movements);

    welcomeText.textContent = `Welcome, ${loginInputUser.value.toUpperCase()}.`;
    labelBalance.textContent = `${person1.currentMoney}€`;
  } else if (
    loginInputUser.value.toLowerCase() === person2.fullName.toLowerCase() &&
    loginInputPin.value === person2.password
  ) {
    console.log(
      `Welcome ${person2.fullName}  Your current money :${person2.currentMoney}$`
    );
    displayMovements(person2.movements);

    welcomeText.textContent = `Welcome, ${loginInputUser.value.toUpperCase()}.`;
    labelBalance.textContent = `${person2.currentMoney}$`;

    //Transfer Money
  } else {
    console.log('Wrong Password or Username !');
  }
});

// //Transfer Money

btnTransfer.addEventListener('click', function () {
  if (labelPerson === person1.fullName.toLowerCase()) {
    person1.currentMoney += Number(labelAmount.value);
    person2.currentMoney -= Number(labelAmount.value);
    labelBalance.textContent = `${person2.currentMoney}$`;
  } else if (labelPerson === person2.fullName.toLowerCase()) {
    person1.currentMoney -= Number(labelAmount.value);
    person2.currentMoney += Number(labelAmount.value);
    labelBalance.textContent = `${person2.currentMoney}$`;
  } else {
    console.log(`NASIIIIL CALISMAZ!!!!!!!  DUSUUUUN!  `);
  }
});

//REQUEST LOAN Person1

btnLoan.addEventListener('click', function () {
  person1.currentMoney += Number(labelLoan.value);
  labelBalance.textContent = `${person1.currentMoney}€`;
  var divExtra = document.createElement('.movements__row');
  var element = document.createElement('.movements__type--deposit');
  labelMovements.value = Number(labelLoan.value);
  labelMovements.textContent = `${labelLoan.value}€`;
});
//REQUEST LOAN Person2

btnLoan.addEventListener('click', function () {
  person2.currentMoney += Number(labelLoan.value);
  labelBalance.textContent = `${person2.currentMoney}$`;
});

//Transforming Euro to USD
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsd = 1.1;

const movementsUsd = movements.map(function (mov) {
  //because map method return a new array we can store it to a variable
  return mov * euroToUsd;
});
console.log(movementsUsd);
//we can do the same thing with for loop
// const movementsUsdfor= [];
// for(const mov of movements) movementsUsdfor.push(mov*euroToUsd);
//console.log(movementsUsdfor); ([220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002])  SAME WITH return mov * euroToUsd
