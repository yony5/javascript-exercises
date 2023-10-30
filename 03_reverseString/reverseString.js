const reverseString = (wordToReverse) => {
    let size = wordToReverse.length;
    let result ="";
    while(size > 0){
        result += wordToReverse[size - 1];
        size--;
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
