const leapYears = function(year) {

    if (
        ((year % 4) % (year % 4)) % 1 != 0 &&
        ((year % 400) % (year % 400)) % 1 != 0
        ) {
        return false
    } else if (
        ((year % 100) % (year % 100)) % 1 === 0
        ) {
        return true
    };
    
};

// Do not edit below this line
module.exports = leapYears;
