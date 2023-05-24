const findTheOldest = function(array) {
    console.table(array);
    let currentYear = new Date().getFullYear();

    // fix objects with no yearOfDeath
    let fixedArray = array.map(obj => {
        if (!obj.yearOfDeath) {
            return ({
                name: obj.name,
                yearOfBirth: obj.yearOfBirth,
                yearOfDeath: currentYear,
            })
        } else {
            return obj
        }
    });

    // sort array from oldest to youngest
    let sortedArray = fixedArray.sort((a,b) => {
        let ageA = a.yearOfDeath - a.yearOfBirth;
        let ageB = b.yearOfDeath - b.yearOfBirth;
        if (ageA > ageB) {
            return -1;
        } else {
            return 1;
        }
    })

    return sortedArray[0]

};

// Do not edit below this line
module.exports = findTheOldest;
