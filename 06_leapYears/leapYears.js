const leapYears = function(num) {
    let result;
    if(num % 400 === 0){
        result = true;
    } else if(num % 100 === 0){
        result = false;
    } else if(num % 4 === 0){
        result = true;
    } else {
        result = false
    }
    return result

};

// Do not edit below this line
module.exports = leapYears;
