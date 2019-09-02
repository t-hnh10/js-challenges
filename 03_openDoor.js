/*
Open Door

You will only open the door if Simon is there with coffee.

The openDoor function should return true if 
at least one person at the door has the name Simon,
and hasCoffee is true. Otherwise return false.

Does your solutino work when only one person is at the door? 
What if no one is there?

Beast mode: make it work when multiple people come to the door

Test your solution:
npm test

(requires jest: npm i -g jest)
*/

// input is an array of objects, where each object has two properties:
// name : string
// hasCoffee : boolean
// openDoor should return true when at least one of those objects has the values:
// name: Simon
// hasCoffee : true

function openDoor(input) {
	// Your code here
	for (let i = 0; i < input.length; i++) {
		if (input[i].name === "Simon" && input[i].hasCoffee == true) {
			return true;
		}
	}
	return false;
}
module.exports = {
	openDoor
}