const reverseString = function(string) {
    let num = string.length;
    let result = "";
    for(let i = 0; i < num; i++){
        result += string[num-i-1];
    }
    return result

};

// Do not edit below this line
module.exports = reverseString;
