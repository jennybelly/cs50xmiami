/*
The Fortune Teller part 2

Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:
- takes 4 arguments: number of children, partner's name, geographic location, job title.
- outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
- Call that function 3 times with 3 different values for the arguments.
*/

// write your solution here...
function tellFortune(numChildren, partnerName, geoLocal, jobTitle) {
  console.log("You will be a " + jobTitle + " in " + geoLocal + ", \
and married to " + partnerName + " with " + numChildren + " kids.");
}

tellFortune(3, "Jeff", "Toronto", "Hairstylist");
tellFortune(8, "Noel", "Miami", "Physician");
tellFortune(5, "Ian", "New York", "Programmer");
