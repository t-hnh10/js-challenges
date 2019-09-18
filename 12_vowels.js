/*
Vowels

Write a method that will take a string and
return an array of vowels used in that string.

Example:
vowels("The quick brown fox") should return ["e","u","i","o","o"]
vowels("Hello WOrld") should return ["e","o","O"]

Check your solution by running the tests:
npm test
*/

function vowels(string) {
    // Matching against the regex
    // g searches the whole string, i enforces case-insensitivity
    let vowelsArray = string.match(/[aeiou]/gi);
    return vowelsArray === null ? 0 : vowelsArray;
}

module.exports = {
    vowels
}