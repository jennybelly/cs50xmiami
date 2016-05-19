/*
The Movie Database

It's like IMDB, but much much smaller!

- Create an object to store the following information about your favorite movie:
  title (a string), duration (a number), and stars (an array of strings).

- Create a function to print out the movie information like so:
  "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
*/

// write your solution here...
var fav_movie = {
  title: "Les Intouchables",
  duration: 112,
  stars: ["Francois Cluzet", " Omar Sy", " Anne Le Ny"]
};
function print(movie) {
  console.log("" + fav_movie.title + " lasts for " + fav_movie.duration + " minutes.\
 Stars: " + fav_movie.stars + ".");
}
