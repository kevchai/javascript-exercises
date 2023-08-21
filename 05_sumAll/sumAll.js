const sumAll = function(firstValue, lastValue) {
    let sum = 0;

    const firstValueType = typeof firstValue;
    const lastValueType = typeof lastValue;

    if (firstValue < 0 || lastValue < 0 || firstValueType !== "number" || lastValueType !== "number") {
        return "ERROR";
    } else if (firstValue < lastValue) {
        for (i = 0; i < lastValue; i++) {
            sum = sum + firstValue++
        }
    } else if (firstValue > lastValue) {
        for (i = 0; i < firstValue; i++) {
            sum = sum + lastValue++
        }
    };

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
