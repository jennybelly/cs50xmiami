/*
The World Translator

Write a function named helloWorld that:
- takes 1 argument, a language code (e.g. "es", "de", "en")
- returns "Hello, World" for the given language, for at least 3 languages.
  It should default to returning English.

Call that function for each of the supported languages
and log the result to make sure it works.
*/

// write your solution here...
function helloWorld(langcode) {
  if (langcode == "es") {
    return "Hola, Mundo";
  }
  else if (langcode == "fr") {
    return "Bonjour, Monde";
  }
  else if (langcode == "de"){
    return "Hallo, Welt";
  }
  else {
    return "Hello, World";
  }
}
helloWorld("de");
helloWorld("es");
helloWorld("fr");
helloWorld("en");
