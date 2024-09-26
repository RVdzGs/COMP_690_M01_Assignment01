
// ****************** M2 Assignment 01 *****************

// ******************** Exercise 01 ********************

// Convert the following highlighted identifiers to Camel Case notation.

/*
// Converted identifiers:

let someMonth
function theMonth(){}
let currentMonth
let summerMonth
let myLibraryFunction
*/

// ******************** Exercise 02 ********************

// Give me an example of a numeric literal expression, a string literal expression, a Boolean literal expression, and a null literal expression.

/*
// Numeric literal expression
let num = 7.7      

// String literal expression
let str = "Hello, San Diego!" 

// Boolean literal expression
let isTrue = true     

// Null literal expression
let emptyValue = null     
*/

// ******************** Exercise 03 ********************

// Give me two examples of complex / variable expressions.

/*
// Examples:
let anExpression01 = 9 + 15
let anExpression02 = 5 * 2
*/

// ******************** Exercise 04 ********************

// Declare (but do not assign) 9 variables for the following identifiers: First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source, May We Contact You.
// Use Camel Casing and Hungarian Notation when naming your identifiers.

/*
let firstName, lastName, address, city, state, zipCode;
let yourAge;
let strReferralSource, boolMayWeContactYou;
*/

// ******************** Exercise 05 ******************** 

// Take the 3 of the 9 variables that you created above and demonstrate 3 ways for declaring and assigning values to those variables.
/*
let firstName01 = 'Raul';
let city01 = 'SD';
let boolMayWeContactYou01 = true;

let firstName02;
let city02;
let boolMayWeContactYou02;

firstName02 = 'Raul';
city02 = 'SD';
boolMayWeContactYou02 = true;

let firstName03 = 'Raul', city03 = 'SD', boolMayWeContactYou03 = true;
*/
// ******************** Exercise 06 ******************** 

//Create a variable.
// Add a number and a string and display the coerced result in the browser’s console window.
/*
let number = 200;
let string = " Sailing Boats";

let result = number + string; 
console.log(result); 
*/

// ******************** Exercise 07 ********************

// Create two variables.
// For the first variable, add a Boolean and a string and display the coerced result.
// For the second variable, add a number and a Boolean and display the coerced result.

/*
// First variable: Adding a Boolean and a string
let sailing = true; 
let boatType = " Sailing Boats"; 

let firstResult = sailing + boatType; 
console.log(firstResult); 

// Second variable: Adding a number and a Boolean
let numberOfSails = 3; 

let secondResult = numberOfSails + sailing; 
console.log(secondResult); 
*/
// ******************** Exercise 08 ********************

// Is the following string literal valid? If not, how would you fix it?

/*
let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."'
console.log(someString)
*/
// ******************** Exercise 09 ********************

// Create a variable that produces a null value in the console window.
// Then, create a variable that produces an undefined value in the console window.
/*
// Variable that produces a null value
const sailboat = null;
console.log(sailboat);

// Variable that produces an undefined value (age of the boat is unknown)
let boatAge;
console.log(boatAge);
*/

// ******************** Exercise 10 ********************

// Use the unary typeof operator on various literals to return the following types within the console window: string, number, Boolean, object, and undefined.

/*
console.log(typeof "Sailing Boats");      // String
console.log(typeof 20);                    // Number
console.log(typeof true);                  // Boolean
console.log(typeof { type: "catamaran" }); // Object
console.log(typeof boatAge);             // Undefined
*/

// ******************** Exercise 11 ********************

// Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows:

// Hello Zak Ruvalcaba, welcome to the JavaScript class!

// Substitute my name for your name. Although not necessary in practice, I want you to use 2 concatenation operators to construct this string of text. One after the text “Hello” and a second one after your name and before the comma.

/*
window.alert('Hello '+ 'Raul' +', welcome to the JavaScript class!');
*/

// ******************** Exercise 12 ********************

// Declare a variable called name and set it equal to your name.
// Substitute your name in the previous alert string with the variable instead.

/*
const myName='Raul';
window.alert('Hello '+ myName +', welcome to the JavaScript class!');
*/

// ******************** Exercise 13 ********************

// Declare a variable called course and set it equal to “JavaScript”.
// Rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.

/*
const myName='Raul';
const course='JavaScript';
window.alert(`Hello ${myName}, welcome to the ${course} class!`);
*/

// ******************** Exercise 14 ********************

// Rework the above string so that a line break is added right before the word “Welcome”. Your alert box should display as follows:

// Hello Zak Ruvalcaba.
// Welcome to the JavaScript class!

/*
const myName='Raul';
const course='JavaScript';
window.alert(`Hello ${myName}.\nWelcome to the ${course} class!`);
*/


// ******************** Exercise 15 ********************

// Replace the hardcoded string of your name with a prompt that asks the user for their name. 
// The prompt’s response will now be captured in the name variable.

/*
const course='JavaScript';
let userName=prompt("Please enter your name:");
if (userName.length<2){
    alert("Don't forget to enter your name");
}
else {
    window.alert(`Hello ${userName}.\nWelcome to the ${course} class!`);
}
*/

// ******************** Exercise 16 ********************

// Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking. 
// The prompt’s response will now be captured in the course variable.

/*
const userName='Raul';
let className=prompt("Please enter the class you are taking.");
if (className.length<2){
    alert("You forgot to enter your class");
}
else {
    window.alert(`Hello ${userName}.\nWelcome to the ${className} class! `);
}
*/
// ******************** Exercise 17 ********************

// Declare a variable called x and assign it a value of 10.
// Declare a variable called y and assign it a value of 20.
// Display the sum of those two numbers in the console window.

/*
let x=10;
let y=20;

console.log(`The sum of those two numbers is: ${(x + y)}`);
*/

// ******************** Exercise 18 ********************

// Declare a variable called x and assign it a value of 20.
// Add and assign 20 to that variable and display the result in the console window.
// The result should be 40.

/*
x=20;
x+=20;

console.log(`The result of the sum is: ${x}`);
*/

// ******************** Exercise 19 ********************

// Declare a variable called x and assign it a value of 20.
// Multiply and assign 5 to that variable and display the result in the console window.
// The result should be 100.

/*
x=20;
x*=5;

console.log(`The result of the multiplication is: ${x}`);
*/

// ******************** Exercise 20 ********************

// Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3.
// Divide and assign 1 to that variable and display the result in the console window.
// The result should be 2. If you got 6.66 try again.
/*
x=20%3;
x/=1;

console.log(`The result of the division is: ${x}`);
*/

// ******************** Exercise 21 ********************

// Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window.
/*
let num1 = 12;
let num2 = 8;
let num3 = 5;

let result = (num1 > num2) && (num2 > num3) && (num1 + num3 === 17);

console.log("The result of the evaluation is:", result); 
*/

// ******************** Exercise 22 ********************

// Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window. 
// The application cannot use the same operators used in the previous application.
/*
let a = 10;
let b = 20;
let c = 30;

let result = (a >= b) && (c < b) || (a + c === 50);

console.log("The result of the evaluation is:", result); 
*/