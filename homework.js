// Is truthy- TAB 1
// If the value is truthy, print true;
// If the value is falsy, print the corresponding result:
// "The boolean value false is falsy";
// "The null value is falsy";
// "undefined is falsy";
// "The number 0 is falsy (the only falsy number)";
// "The empty string is falsy (the only falsy string)";

// *changing tabs to comment to use other ones*
const string = "I am a string";
if (string) {
  console.log("true");
} else {
  if (typeof string === "boolean") {
    console.log("The boolean value false is false");
  } else if (string === null) {
    console.log("The null value is falsy");
  } else if (string === undefined) {
    console.log("undefined is falsy");
  } else if (string === 0) {
    console.log("The number 0 is falsy (the only falsy number)");
  } else if (string === "") {
    console.log("The empty string is falsy (the only falsy string)");
  }
}

//Number Line- TAB 2
// Using if/else if/else statements, JavaScript code in a JavaScript file that takes the sum of two numbers and prints the corresponding result:

// sum + " is less than -1000";
// sum + " is a negative number";
// sum + " is equal to 0";
// sum + " is larger than 0";
// sum + " is greater than 100";

// *changing tabs to comment to use other ones*
const num1 = -5
const num2 = 0
const sum = num1 + num2;

if (sum > 100) {
  console.log("101 is greater than 100");
} else {
  if (sum > 0) {
    console.log("97 is greater than 0");
  } else if (sum === 0) {
    console.log("0 is equal to 0");
  } else if (sum < -999) {
    console.log("-1000 is a negative number");
  } else if (sum + "is a negative number") {
    console.log("-5 is a negative number");
  }
}

// Greater Than Or Equal To 5-TAB 3
// Using if/else statements, JavaScript code in a JavaScript file that prints true if both parameters are greater or equal to 5.
// num1     	num2	   Expected Print
//  5	         6	         true
//  10	       11	         true
//  0	         0	         false
//  1000	   -1000	       false
//  6	         4	         false
//  5	         5	         true

// *changing tabs to comment to use other ones*
const num1 = 0
const num2 = 0
const sum = num1 + num2;

if(sum >= 5) {
  console.log("true");
} else {
  if (sum <= 5) {
    console.log("false");

  }
}

//Pair and Compare-TAB 4

//Using if/else statements and strict equality operators,
//JavaScript code in a JavaScript file that compares two sets of two values. Print true if at least one of the pairs is truthy.


// *changing tabs to comment to use other ones*
const param1A = "cake"
const param1B = "cake"
const param2A = "pie"
const param2B = "pie"

if(param1A === param1B || param2A === param2B) {
  console.log("true");
} else {
  console.log("false");

}


