// let bank = {
//   quarters: 0,
//   dimes: 0,
//   nickels: 0,
//   pennies: 0
// };


// function bankCounter(amount)  {
//   amount = amount * 100; // 3.67 = 367

//   bank.quarters = Math.floor(amount/25);
//   amount = amount % 25;
//   console.log(amount);

//   bank.dimes = Math.floor(amount / 10);
//   amount = amount % 10;
//   console.log(amount);

//   bank.nickels = Math.floor(amount / 5);
//   amount = amount % 5;
//   console.log(amount);

//   bank.pennies = Math.floor(amount / 1);
//   bank.pennies = amount;
//   console.log(amount);

//   return bank;
// }

// console.log(bankCounter(3.67));



// RECURSION REFACTOR

const numOfEachCoin = [];
const coinCount = (coinValues, amount) => {

  // termination case
  if (isNaN(amount))  {
    return "Error: Invalid args";
  }

  // base case
  if (amount <= 0 || coinValues.length == 0) {
    return numOfEachCoin;
  } else {
    
    // add coin value count to empty array
    numOfEachCoin.push(Math.floor(amount / coinValues[0]));
    
    // set amount and coinValues arr for next recursion
    amount = (amount % coinValues[0]);
    coinValues.shift();

    console.log(amount, coinValues);

    return coinCount(coinValues, amount)
  }
}

console.log(coinCount([25, 10, 5, 1], 149))