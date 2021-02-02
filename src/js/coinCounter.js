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


 
// RECURSION REFACTOR -- "Pure" Function

const coinCount = (amount, coinValues = [25, 10, 5, 1], numOfEachCoin = [] ) => {

  // termination case
  if (isNaN(amount))  {
    return "Error: Invalid args";
  }

  // base case
  if (amount <= 0 || coinValues.length == 0) {
    return numOfEachCoin;
  } else {
    
    // set new amount coinValues arr for next callback
    amountTransformedCopy = (amount % coinValues[0]);

    // set new coin value array for next callback
    coinValuesTransformedCopy = coinValues.slice(1);

    // set new number of coins array for next callback
    numOfEachCoinTransformedCopy = numOfEachCoin.concat(Math.floor(amount / coinValues[0]));

    return coinCount(amountTransformedCopy, coinValuesTransformedCopy, numOfEachCoinTransformedCopy)
  }
}

console.log(coinCount(149))