/*
The even/odd reporter

- Write a for loop that will iterate from 0 to 20.
- For each iteration, it will check if the current number is even or odd,
  and report that to the screen (e.g. "2 is even").
*/

// write your solution here...
for (i = 0; i < 21; i++) {
  if ((i % 2) == 1) {
    console.log("" + i + " is odd.");
  }
  else {
    console.log("" + i + " is even.");
  }
}
