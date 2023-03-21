'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2022-11-27T14:11:59.604Z',
    '2022-11-29T17:01:17.194Z',
    '2022-11-29T23:36:17.929Z',
    '2022-11-30T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value'); // The current balance big number
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app'); // The whole app itself
const containerMovements = document.querySelector('.movements'); // The account movements part (deposit, withdrawal)

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const formatMovementDate = function (date, locale) {
  // Because of Intl.DateTimeFormat() we need also now locale
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  const daysPassed = calcDaysPassed(new Date(), date);
  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    // const year = date.getFullYear();
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const day = `${date.getDate()}`.padStart(2, 0);
    // return `${day}. ${month}. ${year}`;
    return new Intl.DateTimeFormat(locale).format(date); // To format all the deposits also
  }
};

const formatCurrency = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    // We added the object straight in here
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  // Sorting parameter is also inserted here, and false is not sorting by default
  containerMovements.innerHTML = ''; // Basically we empty the HTML file first, so the old numbers wont show up

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements; // :movements takes it back to original sort
  // Slice() is used to make a copy from the original movements array since .sort() will change original array

  movs.forEach((mov, i) => {
    // movement, index
    const type = mov > 0 ? 'deposit' : 'withdrawal'; // If movement > 0 it's deposit, lower than withdrawal
    const date = new Date(acc.movementsDates[i]); // It's common to use forEach on many items at once, like movements and now for movementDates too
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCurrency(mov, acc.locale, acc.currency);

    const html = `<div class="movements__row">  
<div class="movements__type movements__type--${type}">${i + 1} ${type} </div>  
<div class="movements__date">${displayDate} </div>
<div class="movements__value">${formattedMov}</div> 
</div>`; // It was copied from index.html // toFixed, to get rid of weird comma places, plus add 00 if whole number
    containerMovements.insertAdjacentHTML('afterbegin', html); // To make the html appear on the page
    // Line 135 was before: <div class="movements__value">${mov.toFixed(2)}</div>
  }); // Line 70 the first ${type} changes the color to either red or green, the second one changes the text to either deposit or withdrawal
};

const calcDisplayBalance = function (acc) {
  // Shows the whole balance
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCurrency(
    acc.balance,
    acc.locale,
    acc.currency
  );
  // labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  // To add all the positive movements together (IN)
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCurrency(incomes, acc.locale, acc.currency);
  // labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const outgoes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCurrency(
    Math.abs(outgoes),
    acc.locale,
    acc.currency
  );
  // labelSumOut.textContent = `${Math.abs(outgoes).toFixed(2)}€ `;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100) // * 1.2 / 100 is simply to find interest 1.2%
    .filter((int, i, arr) => {
      // console.log(arr);  // To see interests that are below 1
      return int >= 1; // Only interests that are >= 1 will be paid out
    })
    .reduce((acc, int) => acc + int, 0); // So from all the deposits we made 1.2% interest (fictional)
  labelSumInterest.textContent = formatCurrency(
    interest,
    acc.locale,
    acc.currency
  );
  // labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUserNames = function (accs) {
  // accs => accounts
  accs.forEach(function (acc) {
    acc.userName = acc.owner // acc.owner => account1, account2 owner etc etc
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUserNames(accounts); // Takes the usernames from line 36

const updateUI = function (acc) {
  // Display all the balances
  displayMovements(acc); // Had to move them all here to unhide after opacity change
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
};

// Logout timer
const startLogoutTimer = function () {
  let time = 300;
  const timer = setInterval(() => {
    const min = String(Math.trunc(time / 60)).padStart(2, 0); // Have to make it to String or we can't do the padding
    const sec = String(Math.trunc(time % 60)).padStart(2, 0); // Had to do the reminder to get the seconds part (because it works with 60)
    labelTimer.textContent = `${min}:${sec}`;
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }
    time--; // To decrease timer 1 second (to show it on screen)
  }, 1000);
  return timer;
};

// Event handler
let currentAccount; // Had to make it a global value since it needs to be used elsewhere also
let timer;

// To fake login to account1
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

// Login
btnLogin.addEventListener('click', function (e) {
  // Because in index.html the button is submitting a form, the form reloads the page, .preventDefault() stops that
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  ); // CurrentAccount used here
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // If currentAccount exists (?), then change inputLoginPin input to a Number
    // Since inputs are always strings
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0] // Take the owners name, split it with a space and then take only first value
    }`;
    containerApp.style.opacity = 100; // Hides/unhides the whole page

    // Current date
    const now = new Date();
    const times = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'long', // Can also be numeric
      year: '2-digit',
      weekday: 'long',
    };
    const locale = navigator.language;
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      times
    ).format(now);
    // We used currenaccount since there are some languages present (for dates)

    // const now = new Date();
    // const year = now.getFullYear();
    // const month = `${now.getMonth() + 1}`.padStart(2, 0); // Months are 0 based so need + 1
    // const day = `${now.getDate()}`.padStart(2, 0); // Padding with zero 2 places aka 2 => 02
    // const hour = `${now.getHours()}`.padStart(2, 0); // You need ${} in the case of padStart (I guess a function)
    // const minute = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}. ${month}. ${year}, ${hour}:${minute}`; // labelDate is the part where the date now is

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = ''; // The values will disappear from input field
    inputLoginPin.blur(); // The cursor from the field will disappear

    if (timer) clearInterval(timer); // When there is another timer already running, clear it
    timer = startLogoutTimer(); // So multiple users won't use the same timer

    updateUI(currentAccount);
  }
});

// Transfering money
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.userName === inputTransferTo.value // Account.username (receiver) needs to match with the value i tranfer to (name)
  );

  inputTransferAmount.value = inputTransferTo.value = ''; // Again to empty the fields

  if (
    amount > 0 && // The amount you're trying to transfer needs to be not negative amount
    receiverAcc && // Receiver account needs to exist
    currentAccount.balance >= amount && // Balance on your account needs to have funds
    receiverAcc?.userName !== currentAccount.userName // If receiver account even exists (?), it does'nt equal yours
  ) {
    currentAccount.movements.push(-amount); // From current account make a negative transfer (-amount)
    receiverAcc.movements.push(amount); // To the receiver account make a positive transfer (amount)

    currentAccount.movementsDates.push(new Date().toISOString()); // When transferring money, also updating date
    receiverAcc.movementsDates.push(new Date().toISOString()); // In real world you would't have like this, just for show

    updateUI(currentAccount);

    clearInterval(timer); // Doing a transfer resets the login time again
    timer = startLogoutTimer();
  }
});

// Bank only grants a loan if, when there is at least one deposit with at least 10% of requested loan amount
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value); // So the loan wont have comma places like 500.50
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Here is the 10% part
    setTimeout(function () {
      // Setting timeout for 5 seconds to mimic loan time
      currentAccount.movements.push(amount);
      currentAccount.movementsDates.push(new Date().toISOString()); // When loaning money, also updating date

      updateUI(currentAccount);
      clearInterval(timer);
      timer = startLogoutTimer();
    }, 5000); // Timeout 5 seconds
  }
  inputLoanAmount.value = ''; // Empty the field
});

// Close account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      // FindIndex returns the first element index, not the element itself
      acc => acc.userName === currentAccount.userName
    );
    accounts.splice(index, 1); // Delete one account from accounts array
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = ''; // Empty the field
});

// Sort button
let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted); // !sorted (opposite of sorted aka true) => changes the sort = value
  sorted = !sorted; // Can flip whenever button is pressed from true to false and vice versa
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// // LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
