// You are given a secret message you need to decipher.Here are the things you need to know to decipher it:

// For each word:

// the second and the last letter is switched(e.g.Hello becomes Holle)
// the first letter is replaced by its character code(e.g.H becomes 72)
// Note: there are no special characters used, only letters and spaces

// Examples

// decipherThis('72olle 103doo 100ya'); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'

// EXTRA FUN!!! Make up another encryption and challenge your friends to write the decipher method

function decipher(code) {
	// your code goes here
}

function decipher(code) {
    let newCode="";
    var n
	var words = code.split(" ");
    words.forEach(word => {
        newWord="";
        let number;
        if (word.charAt(0)=='1'){
            n=3
        }   
        else{
            n=2
        }
        
        number = parseInt(word.substring(0,n));
        newWord = String.fromCharCode(number)
        if (word.length>(n+1))
            newWord+=word.charAt(word.length - 1)
        if (word.length>(n+2))
            newWord+=word.substring((n+1),word.length - 1)
        newWord+=word.charAt(n)
       
        if (newCode===""){
            newCode=newWord;
        }else{
            newCode+=" "+newWord;
        }
    });
    console.log(newCode)
}

function decipher(code) {
	return code.split(' ').map(word => {
		let firstLetter = String.fromCharCode(word.match(/\d+/));
		word = word.match(/[a-z]/gi) || [];
		[word[0], word[word.length - 1]] = [word[word.length - 1], word[0]];
		return firstLetter + word.join('');
	}).join(' ');
}

let assert = require("assert")
describe("decipher", () => {
	it("should decipher '72olle 103doo 100ya' as 'Hello good day'", () => {
		assert.equal(decipher("72olle 103doo 100ya"), "Hello good day")
	})
	it("should decipher '82yade 115te 103o' as 'Ready set go'", () => {
		assert.equal(decipher("82yade 115te 103o"), "Ready set go")
	})
})
// write some more tests. Share then with your classmates
