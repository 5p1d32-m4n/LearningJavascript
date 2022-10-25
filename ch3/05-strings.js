// ESCAPING

const dialog = 'Sam looked up, and said "hello, old friend!", as Max walked in.'
// In dialog, we can use double quotes without fear because our string is set off with single quotes.

const imperative = "Don't do that!"
// Likewise, in 'imperative', we can use an apostorophe because the string is set off with double quotes.

const dialog1 = "He looked up and said \"don't do that!\" to Max."
// escaping double quotes with \"
const dialog2 = 'He looked up and said "don\'t do that!" to Max.'
// escaping single quotes with \'

const s = "In JavaScript, use \\ as an escape character in strings."
// escaping \\ the slash character.


// TEMPLATE STRINGS

let currentTemp = 19.5              // 00b0 is the Unicode code point for the "degree" symbol
const message = "The current temperature is " + currentTemp + "\u00b0C"