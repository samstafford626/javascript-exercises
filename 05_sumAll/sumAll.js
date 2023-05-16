const sumAll = function() {
    // given two numbers(a lower num and higher num), add every number from the lower # to the higher number in one sum
    let finalSum = 0;
    let arrayArgs = Array.from(arguments) //turns array from an object to an array
    
    // Tests if their are 2 arguments, and if they are not numbers
    if (arrayArgs.length !== 2) {
        return "ERROR"
    } else if (typeof arrayArgs[0] !== typeof 1 || typeof arrayArgs[1] !== typeof 1) {
        return "ERROR"
    }

    // Assigns the low and high number
    let lowerNum = Math.min(...arrayArgs);
    let higherNum = Math.max(...arrayArgs);

    // Returns error if negative value is input
    if (lowerNum < 0 || higherNum < 0) {
        return "ERROR"
    } 
    
    // Sums all of the numbers
    while (lowerNum <= higherNum) {
        finalSum += lowerNum;
        lowerNum++;
    }

    return finalSum;
};

console.log(sumAll(10,90))

// Do not edit below this line
module.exports = sumAll;
