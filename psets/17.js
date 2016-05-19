/*
The Pluralizer

Write a function named pluralize that:
- takes 2 arguments, a noun and a number.
- returns the number and pluralized form, like "5 cats" or "1 dog".

Call that function for a few different scores and log the result to make sure it works.
- Bonus: Make it handle a few collective nouns like "sheep" and "geese".
*/

// write your solution here...
function pluralize(noun, number) {
  if (number > 1 && noun != "sheep" && noun != "geese") {
    return number + " " + noun + "s";
  }
  else {
    return number + " " + noun;
  }
}
pluralize("dog", 1);
pluralize("geese", 8);
pluralize("desk", 5);
