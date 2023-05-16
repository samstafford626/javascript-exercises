const removeFromArray = function() {
    // identify the index of target
    // splice the target out of array
    // repeat until indexOf returns -1
    // loop the above process so that it executes for
    //  as many arguments as are given
    let array = arguments[0];
    let index = 0;

    for (let i = 1; i < arguments.length; i++) {
        while (array.indexOf(arguments[i]) > -1) {
            index = array.indexOf(arguments[i]);
            array.splice(index,1);
        }
    }

    return array
    
};
// testArray = [1,2,3,2,5]
// console.log(removeFromArray(testArray,2,3,5))

// Do not edit below this line
module.exports = removeFromArray;
