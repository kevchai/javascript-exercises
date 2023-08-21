const reverseString = function(word) {
    let length = word.length;

    const wordSliced = [];

    for (i = 0; i < length; i++) {
        wordSliced.push(word.at(i))
    };

    reverseWordSliced = wordSliced.reverse();

    const reversedWordFinal = reverseWordSliced.join("");


    return reversedWordFinal;
};

// Do not edit below this line
module.exports = reverseString;
