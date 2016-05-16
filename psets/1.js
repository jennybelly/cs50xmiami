/*
The Age Calculator

Forgot how old someone is? Calculate it!

- Store the current year in a variable.
- Store their birth year in a variable.
- Calculate their 2 possible ages based on the stored values.
- Output them to the screen like so: "They are either NN or NN", substituting the values.
*/

// write your solution here...

var currentyear = 2016;
var birthyear = 1990;
var age_one = currentyear - birthyear;
var age_two = currentyear - birthyear + 1;

console.log("They are either " + age_one + " or " + age_two + ".");
