/*
The Recipe Card

Never forget another recipe!

- Create an object to hold information on your favorite recipe. It should have
  properties for title (a string), servings (a number),
  and ingredients (an array of strings).

- On separate lines (one console.log statement for each), log the recipe
  information so it looks like:
    Mole
    Serves: 2
    Ingredients:
    cinnamon
    cumin
    cocoa
*/

// write your solution here...
var fav_recipe = {
  title: "French Vinaigrette",
  servings: 10,
  ingredients: ["olive oil", "mustard", "vinegar", "salt", "pepper"]
};
console.log(fav_recipe.title);
console.log("Serves: " + fav_recipe.servings + "");
console.log("Ingredients:");
for (var i = 0; i < fav_recipe.ingredients.length; i++) {
  console.log(fav_recipe.ingredients[i]);
}
