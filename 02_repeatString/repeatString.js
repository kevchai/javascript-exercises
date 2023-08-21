const repeatString = function(str, frequency) {
    let repeatedStr = "";

    if (frequency < 0) {
        return "ERROR"
    };

    for (let i = 0; i < frequency; i++) {
        repeatedStr = repeatedStr.concat(str)
    };

    return repeatedStr;
};

// Do not edit below this line
module.exports = repeatString;
