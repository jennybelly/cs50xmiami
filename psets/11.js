/*
The Age Calculator part 2

Forgot how old you are? Calculate it!

Write a function named calculateAge that:
- takes 2 arguments: birth year, current year.
- calculates the 2 possible ages based on those years.
- outputs the result to the screen like so: "You are either NN or NN"
- Call the function three times with different sets of values.
- Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
*/

// write your solution here...
var current_year = new Date().getFullYear();

function calculateAge(birth_year, current_year) {
  var age_one = current_year - birth_year;
  var age_two = current_year - birth_year + 1;
  console.log("You are either " + age_one + " or " + age_two + ".");
}

calculateAge(1982, current_year);
calculateAge(1991, current_year);
calculateAge(1948, current_year);
