// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.
describe("multiplyBy3", () => {
    it("returns an array with all the numbers multiplied by 3.", () => {
        const numbersArray1 = [6, 7, 8, 9, 10]
        // Expected output: [18, 21, 24, 27, 30]
        const numbersArray2 = [24, 27, 30, 33, 36]
        // Expected output: [72, 81, 90, 99, 108]
      expect(multiplyBy3(numbersArray1)).toEqual([18, 21, 24, 27, 30])
      expect(multiplyBy3(numbersArray2)).toEqual([72, 81, 90, 99, 108])
    })
  })


// b) Create the function that makes the test pass.
const multiplyBy3 = (numbersArray1, numbersArray2) => {
    return array.map(numbersArray1 * 3)
}

// Pseudo code:

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

const divisibleByThree = (object) => {
  const number = object.number;
  if (number % 3 === 0) {
    return `${number} is divisible by three`;
  } else {
    return `${number} is not divisible by three`;
  }
};

describe("divisibleByThree", () => {
  it("decides if the number inside it is evenly divisible by three or not", () => {
    const object1 = { number: 15 };
    const object2 = { number: 0 };
    const object3 = { number: -7 };

    expect(divisibleByThree(object1)).toEqual("15 is divisible by three");
    expect(divisibleByThree(object2)).toEqual("0 is divisible by three");
    expect(divisibleByThree(object3)).toEqual("-7 is not divisible by three");
  });
});

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.

// Pseudo code:
//input: divisibleByThree function takes an object as an argument
//output: "15 is divisible by three", "15 is divisible by three", "-7 is not divisible by three"
// divisibleByThree function takes an object as an argument
//Checks against the modulo to see if the objects are divisible by three.
//If the condition is true, it returns a string stating that the number is divisible by three.
//If the condition is false, it returns a string stating that the number is not divisible by three.


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.
const capitalizeWords = (words) => {
  return words.map(word => word.charAt(0).toUpperCase() + word.slice(1))
}

// a) Create a test with expect statements for each of the variables provided.
describe("capitalizeWords", () => {
  it("capitalizes all words in the array", () => {
 // Expect["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
//Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

// Pseudo code:
//The capitalizeWords function takes an array of words as an argument.
//It uses the map function
//The result is an array of capitalized words.