const repeatString = function(word, numTimes) {
    
    let repeatedString = "";

    if (numTimes < 0) {
        return 'ERROR';
    }
    
    for (let i = 0; i < numTimes; ++i) {
        repeatedString += word;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
