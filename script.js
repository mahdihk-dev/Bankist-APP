'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// -------------------------------------------------------------------------
// ============================================================================

// simple array methodes :
// arrays are objects and they got built in methode (functions)

// let arr = ['a', 'b', 'c', 'd', 'e'];

// // slice methode (just copy not mutate with begin and end index specifying)
// console.log(arr.slice(1, 4));
// console.log(arr.slice(2));
// console.log(arr.slice(-1));
// // copying array
// console.log(arr.slice());
// console.log([...arr]);

// ======
// splice methode (delete the specified values with (index) and delete count and it mutates original array)
// for example in below code we choosed the number 1 index and we write that 4 element must be deleted after that index
// console.log(arr.splice(1,4))
// console.log(arr)
// deleting the last element of an array
// console.log(arr.splice(-1))

// ==========
// reverse methode (reverse and mutate the array)
// let arr2 = ['j', 'i', 'h', 'g', 'f'];
// // // we just reverse our array using this
// console.log(arr2.reverse())
// // console.log(arr2)

// // ===========
// // concat methode (concatenates arrays) (not mutate original arrays)
// const letters = arr.concat(arr2)
// console.log(letters)
// console.log([...arr,...arr2])

// // ===============
// Join methode (create an string with specified characters in the middle)
// console.log(letters.join(' --- '))

// ++ join does not mutate the real array
// note : split methode does the opposite of this action (join methode) for strings

// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
// New array methode (at) in ES2022 :

// const arr = [23, 132, 453];

// // getting an element from an array :
// console.log(arr[0]);
// // we give at methode our index
// console.log(arr.at(0));

// // get the last element from array
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// // ++++++++
// // at methode can easily give us the last element
// console.log(arr.at(-1))

// // at methode also works on strings :
// console.log('mahdi'[0])
// console.log('mahdi'.at(-1))

// ------------------------------------------------------------------

// Foreach methode in array

// const arr2 = [32,1231,1111,123445]

// for of loops
// for(let i of arr2){
//   console.log(i)
// }

// for loops
// for(let i=0;i<arr2.length;i++){
//   console.log(arr2[i])
// }

// while loops
// while(true){
//   // console.log()
// }

// =====
// loop over arrays :

// bank withdraw or deposite example :
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i,movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1} You deposited ${movement}`);
//   } else {
//     // we use math abs methode in order to remove the signs
//     console.log(`Movement ${i + 1} You withdrew ${Math.abs(movement)}`);
//   }
// }
// console.log('------------------------------------------')
// // forEach methode (requires a callback function)
// // forEach does a task in each iteration and it passes the function,arguments which contain the (current element of that array and indexes and the whole array all of them) (order is important)
// movements.forEach(function (movement,index,array) {
//   if (movement > 0) {
//     console.log(`Movement ${index+1} You deposited ${movement}`);
//   } else {
//     // we use math abs methode in order to remove the signs
//     console.log(`Movement ${index + 1} You withdrew ${Math.abs(movement)}`);
//   }
// });

// Note : continue and break do not work in forEach loops at all
// --------------------------------------------------------------------

// ++ forEach methode in maps and sets (it works on both and arrays too) ++

// // map
// const currencies2 = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// // there is a difference : in maps arguments order that passed to call back function is something else , first value , then key and at last the whole map , which was value , index , whole array in arrays
// currencies2.forEach(function (value, key, map) {
//   console.log(`${key} : ${value}`);
// });

// // set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique)

// // sets are different : they don't have any index or key and second passed argument is the same as value and first aurgument
// currenciesUnique.forEach(function(value,value,set){
//   console.log(`${key} : ${value} ${set}`);
// })

// --------------------------------------------------------------------

// 3 data transformation methode for arrays : map , filter , reduce
// above methodes are highly popular and most used

// 1. map is similar to forEach methode but difference is that it creates a new array while it does a callback function on it and returns a new array according to that applied actions

// 2. filter methode simply creates a new array and it takes an array and sets a condition (simply filters that original array) and adds elements that are okay with wager to that new array

// 3. reduce methode just does an operate on all the array elements and turn them into one single value , it explicitly loops over the array and keeps doing an operate on elements and puts them into our single value that we want

// --------------------------------------------------------------------
// practical map examples (transforming movements array from euro to dollar $)
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // map methode :
// // the rate for 1 euro is 1.1 dollar we soppuse
// const eurToUsd = 1.1;

// // const movementsUSD = movements.map(function (mov) {
// //   // this line is important bcz it's what our map methode returns as the new brand array elements (it simply do some operates on our original array elements and makes a new one accordingly)
// //   return mov * eurToUsd;
// // })
// const movementsUSD = movements.map(mov => mov * eurToUsd);
// console.log(movements);
// console.log(movementsUSD);

// ----------------------------------------------------------------------
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// practical filter example (we want to create an array consisting all deposits (all positive values in movments array))

// const deposits = movements.filter(function (mov) {
// below code says that if mov is greater than 0 , than it should be passed to the new array we're building
//   return mov > 0;
// });
// console.log(deposits);

// forEach methode can do the same but there are differences
// let deposits2 = [];
// movements.forEach(function (mov) {
//   mov > 0 ? deposits2.push(mov) : '';
// });
// console.log(deposits2)

// note : we can do all this works using for of and for loops and even forEach methode , but functional progaramming is the priority in JS

// const withdrawals = movements.filter(mv => mv < 0);
// console.log(withdrawals)

// -------------------------------------------------------------------
// practical reduce example
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // ++ first parameter of callback function in reduce methode is called accumlator and after that , current elm , current index , whole array
// // note : callback function is the first argument of redue methode , and the second one is actually the initial value of accumulator in the first iteration
// const balanceValue = movements.reduce(function (acc, elm, i, arr) {
//   // accumulator is actually the result of previous actions and it just get updated in each iteration with the value of return
//   console.log(`Iteration ${i} : ${acc}`)
//   return acc + elm;
// },100);
// console.log(balanceValue)

// important practice :
// ++++++++++ getting maximum value using reduce methode
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const theGreatest = movements.reduce((acc, elm) => (acc < elm ? elm : acc), movements[0]);
// console.log(theGreatest);

// --------------------------------------------------------------------

// how to chain methodes (using methodes constantly) :

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;

// // we can simpy chain any methode persistently as long as they return a methode so there won't be any problem

// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);

//   console.log(totalDepositsUSD)

// --------------------------------------------------------------------------

// Find methode (retrieves one element of an array based on a condition) :

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// find methode loops over array (like foreach , map ...) and it accepts a callback function as argument so it can execute it in each iteration
// +++ it also needs a boolean condition like filter methode to return
// +++ it doesn't return an array , it returns the first value of array which satisfy condition we made as return
// +++ filter returns an array with values that mathches to the condition , but find only return the first value that matches to condition

// const firstWithdrawal = movements.find(mov=>mov<0)
// console.log(firstWithdrawal)

// in this example we want to select the account object in accounts array which has a certain property value we define as condition
// console.log(accounts)
// const account = accounts.find(acc=>acc.owner==='Jessica Davis')
// console.log(account)

// ------------------------------------------------------------------------

// FindIndex Methode (it works same as find methode)
// +++ difference is that findIndex methode returns the related index number of founded element

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log(movements.findIndex(elm => elm === -400));

// +++ practical example inside application

// ----------------------------------------------------------------------

// Some and Every methode

// ___ Some methode

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // console.log(movements.includes(200))

// // +++ some methode is exactly like includes methode , and it return a boolean if a certain value exist in our array , but difference is that includes methode can only check for equality , but some methode can check with a condition to check whether there are values according to this condition in array or not

// note = some methode also loops over array and we need to pass in a callback function to some methode which return a condition (true or false)

// const anyDeposits = movements.some(mov=>mov>0)
// console.log(anyDeposits)
// console.log(movements.some(mov => mov > 5000));
// console.log(movements.some(mov => mov > 1000));

// =========
// ___ Every methode (it's similar to some methode but it only return true when all the array elements satisfy the condition that we passed in)

// console.log(movements.every(mov=>mov>0))
// console.log(movements.every(mov=>mov<0))

// ****
// prominent note : we can either write our callback function directly inside methode or we can write it separately and put it in our methode argument place :

// const deposit = mov=>mov>0
// console.log(movements.every(deposit))
// console.log(movements.some(deposit))

// ---------------------------------------------------------------------

// flat and flatMap methodes (ES2019) :

// what if we want to just open up a nested array into normal values without any insider array and ... ? (we use flat methode)
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8, 9];
// console.log(arr.flat())

// + info = but flat methode does not unpack more level of nesting , it just unpacks one level deep [[]] not more , unless we change its normal argument sat to 1 level of unpacking to more level
// +++ the argument of flat methode is only for the level of unpacking arrays inside array and it's changeable
// More nested array
// const arrDeeper = [[1, [2, 3]], [4, [5, 6]], 7, 8, 9];
// console.log(arrDeeper.flat(0))
// console.log(arrDeeper.flat(2))

// flatMap is a combining between map and flat which just do the same
// +++ flatMap only accept map argument (same callback function) and it doesn't accept level of going deep like flat methode
// + note that flatMap first does map methode and then it starts to flattening the array and unpacking

// const res = arr.flatMap(elm => 2);
// console.log(res)

// ==========================================================================

// sorting arrays (methodes)

// sort methode (mutates original array)
// Strings (A-Z)
// const owners = ['Jonas', 'Adam', 'Zara', 'Manila', 'Jackob'];
// console.log(owners.sort());
// console.log(owners);

// Numbers
// const nums = [21, 32, 1, 4, 9, 324, -1, -23];
// + note that sort methode doesn't work on numbers (it is default for string and A-Z orders)
// + (so when the value is not string based , it will be automatically converted to string and ordered by A-Z even if it is number)
// console.log(nums.sort())

// TO FIX THIS PROBLEM : we can pass a compare callback function to our sort methode with two parameteres (value and next value) :
// +++ sort also needs a callback function to loop and do it in iterations

// return < 0 , A,B (keep order)
// return > 0 , B,A (switch order)

// Ascending
// nums.sort(function (a, b) {
//   if (a > b) {
//     return 1;
//   }
//   else if (a < b) {
//     return -1;
//   }
// });
// ------ below code is the same as above (minus just does the returning a positive or negative value , and it will be changed in each iteration accordingly)
// +++ if both a , b are the same and they return 0 , then nothing happens
// nums.some((a, b) => a - b);
// console.log(nums);

// // Descending
// nums.sort(function (a, b) {
//   if (a > b) {
//     return -1;
//   } else if (a < b) {
//     return 1;
//   }
// });
// // important improving code :
// nums.sort((a, b) => {
//   b - a;
// });
// console.log(nums);
// important note : for doing descending sort we need to replace the return values in both if statements

// ++++ sort methode must not be used in cases where the array consist any type of values and it is mixed

// --------------------------------------------------------------------------------------

// ++ More ways of creating and filling arrays

// old ones :
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
const arr2 = new Array(1, 2, 3, 4, 5, 6, 7, 8);

// --------------------
// *** empty arrays + fill() methode :

// if you want to create an array which has empty element to fill in later you should probably use new Array function like this : (it gives us an array consisting empty elements according to what we specified for it as its argument, you should use only one argument for this action)
// +++ in this situation we don't specify our array elements manually but we only specify the number of elements in array (empty)

// const arr3 = new Array(8);

// // note : empty arrays cannot be used with array methodes like map , filter , reduce , find ...
// // important : we can use fill() methode for this empty arrays to fill them up

// // fill all empty values to 1
// // arr3.fill(1)

// // fill with value from start index(5) to end of array if not specified
// arr3.fill('mahdi', 5);

// // fill with 5 from start(3) index to end index(6)
// // arr3.fill(5,3,6)

// console.log(arr3);

// // +++ fill() methode works on every array , it doesn't have to be empty

// // ----------------------
// // Array.from() function
// // +++ we can create an empty array and fill it up with values using this function all at once
// // you should use this function like this : (two arguments : 1. for length of array , 2. it is for a mapping function and exactly what we used in our map methode as callback function)
// const arr4 = Array.from({ length: 10 }, () => 10);
// console.log(arr4);

// // + we don't need current argument so we just use a throwaway variable (_)
// const arr5 = Array.from({ length: 100 }, (_, index) => index + 1);
// console.log(arr5);

// // + we can use Array.from() function to just convert any iterable to array and do a map function on it too (like strings , sets , maps , Nodelist from querySelectorAll)
// const myName = Array.from(
//   'Mahdi Hakimi',
//   (curr, index) => curr.toUpperCase() + (index + 1)
// );
// console.log(myName);

// ======================================================================================

// Which Array Methode to Use : watch the video carefully

// ======================================================================================

// ### Practicing All 23 Array Methodes I Learned ... GO TO END OF FILE =>

// $$$$ Down there ...
//
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

// Bankist app project : start ...

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
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
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

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

// -------------------------------------------------------------------

// display transactions
const displayMovements = function (movements, sort = false) {
  // sorting functionality
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  containerMovements.innerHTML = '';
  movs.forEach(function (move, i) {
    const type = move > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${move}€</div>
        </div>
      `;

    // note : this methode just inserts an html string inside our specified element (in this case containerMovements) and needs two argument 1. is the where is should put our html code \ 2. is for what html code string
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// ///////////////////////////////////////////////////////////////

// displaying balance value account

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

////////////////////////////////////////////////////////////////////////

// displaying summary footer

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(dep => (dep * acc.interestRate) / 100)
    .filter(mov => mov >= 1)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${interest}€`;
};

/////////////////////////////////////////////////////////////////////////

// computing user name

const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUserNames(accounts);

///////////////////////////////////////////////////////////////////

// Event Handlers
let currentAccount;
const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

// implementing Login logic +++

btnLogin.addEventListener('click', function (e) {
  // this code prevents form from Submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  //HINT
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Clear Input Fields
    inputLoginPin.value = inputLoginUsername.value = '';
    // this blur function make input loses its focus
    inputLoginPin.blur();
    inputLoginUsername.blur();

    // Display UI and Welcome message
    labelWelcome.textContent = `Welcome Back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // display updated UI
    updateUI(currentAccount);
  }
});

// implementing Transfer logic +++

btnTransfer.addEventListener('click', function (e) {
  // disabling the reload page ability of submit input btn
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  // wagers for transfering
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // display updated UI
    updateUI(currentAccount);
  }
  // clear input fields
  inputTransferAmount.value = inputTransferTo.value = '';
});

// request a loan feature logic +++

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // add movement
    currentAccount.movements.push(amount);

    // update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

// close account feature logic +++ (deleting account)

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  // if user exist and pin is correct too
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);

    // log out and hide UI
    containerApp.style.opacity = 0;
    labelWelcome.textContent = 'Log in to get started'
  }

  // clear fields
  inputCloseUsername.value = inputClosePin.value = '';
});

////////////////////////////////////////////////////////////////

// sorting btn functionality

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// ============================================================================================
// ============================================================================================
// ============================================================================================

// ### Practicing All 23 Array Methodes I Learned ...

// =====
// 1. all bank deposits from all accoutns
// const bankDeposits = accounts
//   .flatMap(mov => mov.movements)
//   .filter(mov => mov > 0)
//   .reduce((acc, mov) => acc + mov);

// console.log(bankDeposits);

// =====
// 2. How many deposits are there above or equal 1000$ in bank
// const numDeposits1000 = accounts
//   .flatMap(mov => mov.movements)
//   .filter(mov => mov >= 1000);
// console.log(numDeposits1000.length);

// // or we can do the same using reduce methode
// const Deposits1000 = accounts
//   .flatMap(mov => mov.movements)
//   // + note : we can simply count anything in arrays using reduce methode
//   .reduce((acc, mov) => (mov >= 1000 ? ++acc : acc), 0);
// console.log(Deposits1000);

// note : prefixed ++ operator is before value and ++ operator is after it
// using plus plus operator when reading a variable is impossible and result would be the variable itself , but prefixed ++ operator (left side) solves this problem

// =====
// 3. Creating an object using reduce methode (consisting withdrawals and deposits)
// const { deposits, withdrawals } = accounts
//   .flatMap(mov => mov.movements)
//   .reduce(
//     (acc, mov) => {

//       // mov > 0 ? (acc.deposits += mov) : (acc.withdrawals += mov);
//       // or :
//       acc[mov > 0 ? 'deposits' : 'withdrawals'] += mov;

//       return acc;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );

// console.log(deposits, withdrawals);


// // 4. create a function to convert any string to a title case ( capitalized sentence with some exception in writing )

// const convertTitleCase = function(title){
//   const capitalize = str => str[0].toUpperCase()+str.slice(1)
//   const exception = ["a",'an','and','the','but','or','on','in','with']

//   const titleCase = title.toLowerCase().split(' ').map(word=>exception.includes(word)?word:capitalize(word)).join(' ')

//   return capitalize(titleCase)
// }

// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LOng TITLE but not Too long'));
// console.log(convertTitleCase('and here we GO again . . .'));