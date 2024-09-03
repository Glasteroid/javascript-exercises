const removeFromArray = function(givenArray) {
    
    let currentTarget = 0;

    for (let i = 1; i < arguments.length; i++) {
        currentTarget = arguments[i];

        for (let j = 0; j < givenArray.length; j++) {
            if (currentTarget === givenArray[j]) {
                givenArray.splice(j, 1);
                j--;
            }
        }
    }
    
    return givenArray;
};

// Do not edit below this line
module.exports = removeFromArray;
