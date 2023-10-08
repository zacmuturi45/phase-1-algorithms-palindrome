function isPalindrome(word) {
  // Write your algorithm here
  let str = word;
  const ar = str.split('');
  const ra = [...ar];
  const copy = ra.reverse();
  const top = ar.toString();
  const bot = copy.toString();
  return bot===top;
  
  
  

};

/* 
  Add your pseudocode here
  Convert the word into an array using split('')
  make a copy of the array using the spread operator.
  reverse the array copy using the reverse() method
  use the strict equality operator to compare the reversed array with the original array.

*/

/*
  Add written explanation of your solution here
  This solution takes any given word and returns a truthy value if the word is a palindrome and vice versa.
  It first converts the given word to an array, makes a copy, reverses this copy and makes a comparison
  between the reversed copy and the original array using the strict equality operator.
  If they match, the code returns a truthy value and vice versa.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
