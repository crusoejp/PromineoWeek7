//Question 1
console.log(
  "1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93. Programmatically subtract the value of the first element in the array from the value in the last element of the array. Do not use numbers to reference the last element, find it programmatically. ages[7] - ages[0] is not allowed! Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths). Use a loop to iterate through the array and calculate the average age."
);
console.log(
  "1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93."
);
//declare ages array
const ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);

console.log(
  "a. Programmatically subtract the value of the first element in the array from the value in the last element of the array."
);
console.log(
  "Do not use numbers to reference the last element, find it programmatically."
);
console.log("ages[7] - ages[0] is not allowed!");
// an arrow function that subtracts the first element from the last element
const findDiff = (arr) => {
  return arr[arr.length - 1] - arr[0];
};
//subtract the first element from the last element
console.log(findDiff(ages));
console.log(ages);

console.log(
  "b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths)."
);
//add a new age to the array
ages.push(100);
console.log(ages);
// find the difference between the first and last element again
console.log(findDiff(ages));

console.log(
  "c. Use a loop to iterate through the array and calculate the average age."
);
// start with 0;
let sum = 0;
// loop
for (let i = 0; i < ages.length; i++) {
  // add each age to the sum
  sum += ages[i];
}
// calculate the average
let average = sum / ages.length;
console.log(average);

// Question 2
console.log(
  "2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'."
);
//declare names array
const names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
console.log(names);

console.log(
  "a. Use a loop to iterate through the array and calculate the average number of letters per name."
);
// start with 0;
let sumLetters = 0;
// loop
for (let i = 0; i < names.length; i++) {
  // add the length of each name to the sum
  sumLetters += names[i].length;
}
// calculate the average
let averageLetters = sumLetters / names.length;
console.log(averageLetters);

console.log(
  "b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces."
);
// start with an empty string
let allNames = "";
// loop
for (let i = 0; i < names.length; i++) {
  // concatenate each name to the string
  allNames += names[i] + " ";
}
console.log(allNames);

//Question 3
console.log("3. How do you access the last element of any array?");
console.log("You can access the last element of an array using the index -1.");
console.log("For example, arr[arr.length - 1]");

// Question 4
console.log("4. How do you access the first element of any array?");
console.log("You can access the first element of an array using the index 0.");
console.log("For example, arr[0]");

// Question 5
console.log(
  "5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array."
);
// declare nameLengths array
const nameLengths = [];
// loop
for (let i = 0; i < names.length; i++) {
  // add the length of each name to the nameLengths array
  nameLengths.push(names[i].length);
}
console.log(nameLengths);

// Question 6
console.log(
  "6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array."
);
// start with 0;
let sumNameLengths = 0;
// loop
for (let i = 0; i < nameLengths.length; i++) {
  // add each length to the sum
  sumNameLengths += nameLengths[i];
}
console.log(sumNameLengths);

// Question 7
console.log(
  "7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello')."
);
// an arrow function that takes two params
const concatWord = (word, n) => {
  // start with an empty string
  let result = "";
  // loop n times
  for (let i = 0; i < n; i++) {
    // concatenate the word to itself
    result += word;
  }
  return result;
};
console.log(concatWord("Hello", 3));

// Question 8
console.log(
  "8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space."
);
// an arrow function that takes two params
const getFullName = (firstName, lastName) => {
  // return the full name
  return `${firstName} ${lastName}`;
};

console.log(getFullName("John", "Doe"));

// Question 9
console.log(
  "9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100."
);

// an arrow function that takes an array of numbers
const isSumGreaterThan100 = (arr) => {
  // start with 0;
  let sum = 0;
  // loop
  for (let i = 0; i < arr.length; i++) {
    // add each number to the sum
    sum += arr[i];
  }
  // return true if the sum is greater than 100
  return sum > 100;
};

console.log(
  "isSumGreaterThan100",
  isSumGreaterThan100([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
);
console.log(
  "isSumGreaterThan100",
  isSumGreaterThan100([11, 22, 33, 44, 55, 66, 77, 88, 99, 100])
);

// Question 10
console.log(
  "10. Write a function that takes an array of numbers and returns the average of all the elements in the array."
);

// an arrow function that takes an array of numbers
const getAverage = (arr) => {
  // start with 0;
  let sum = 0;
  // loop
  for (let i = 0; i < arr.length; i++) {
    // add each number to the sum
    sum += arr[i];
  }
  // calculate the average
  return sum / arr.length;
};

console.log("getAverage", getAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Question 11
console.log(
  "11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array."
);

// an arrow function that takes two arrays of numbers
const isAverageGreaterThan = (arr1, arr2) => {
  // use getAverage
  return getAverage(arr1) > getAverage(arr2);
};

console.log(
  "isAverageGreaterThan",
  isAverageGreaterThan(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [11, 22, 33, 44, 55, 66, 77, 88, 99, 100]
  )
);

// Question 12
console.log(
  "Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50."
);

// an arrow function that takes a boolean and a number
const willBuyDrink = (isHotOutside, moneyInPocket) => {
  // return true if it is hot outside and if moneyInPocket is greater than 10.50
  // ternaries are some of the best things to happen to js
  return isHotOutside && moneyInPocket > 10.5;
};

console.log("willBuyDrink", willBuyDrink(true, 10.51));

// Question 13
console.log(
  "13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it."
);

// get grocery total
const getGroceryTotalWithIdahoTax = (groceries) => {
  // start with 0;
  let total = 0;
  // loop
  for (let i = 0; i < groceries.length; i++) {
    // add each price to the total
    total += groceries[i].price;
  }
  return total * 1.06;
};

const groceriesArray = [2.99, 3.99, 4.99, 5.99, 6.99];

// This function takes an array of grocery prices and returns the total with Idaho sales tax. I created it because I live in Idaho and I need to know how much I'm going to spend on groceries.
console.log(
  "getGroceryTotalWithIdahoTax",
  getGroceryTotalWithIdahoTax(groceriesArray)
);
