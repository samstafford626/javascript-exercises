const palindromes = function (word) {
    // splits string into array and filters out non letters
    const wordArray = word.split("").filter(char => /[a-zA-Z]/.test(char));
    // stores in forward, joins, and makes lowercase
    let forwardWord = wordArray.join("").toLowerCase();
    // reverses the wordArray, joins to string, makes lowercase
    let reversedWord = wordArray.reverse().join("").toLowerCase();
    
    // compares and returns bool
    return reversedWord === forwardWord ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
