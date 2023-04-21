let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Below is an example of a .forEach method:

arr.forEach((x, y, z) => console.log("I iterated"));

// Answer these questions in a separate line that's be commented out:
// 1. What do x, y and z represent?

// x is current value
// y is current index
// z is current array

// 2. What is the key difference between the .forEach method and the .map method?

// They both iterate but .map makes a new array

// Examine this method:

let newArr = arr.map(x => x + 1);

// 3. What would we expect to print out if we did console.log(newArr);

// It adds one to each item in the array and makes a new array. The newArr: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// Create a filter method that creates an arr of only the even values from arr
let evenNums = arr.filter(cur => cur % 2 === 0);
console.log(evenNums);
