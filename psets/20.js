/*
Your top choices

Create an array to hold your top choices (colors, presidents, whatever).
- For each choice, log to the screen a string like: "My #1 choice is blue."

- Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice",
  picking the right suffix for the number based on what it is.
*/

// write your solution here...
var colors = ["purple", "blue", "aqua", "yellow"];
for (var i = 0; i < colors.length; i++) {
  var array_num = i + 1;
  var suffix;
  if (array_num == 1) {
    suffix = "st";
  }
  else if (array_num == 2) {
    suffix = "nd";
  }
  else if (array_num == 3) {
    suffix = "rd";
  }
  else {
    suffix = "th";
  }
  console.log("My " + array_num + "" + suffix + " choice is " + colors[i] + ".");
}
