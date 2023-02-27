function getRange(num1, num2){
    let result = [];
    let int1;
    let int2;

    if(num1 < num2){
        int1 = num1;
        int2 = num2;
    } else {
        int2 = num1;
        int1 = num2;
    }

    for(let i = int1; i <= int2; i++){
        result.push(i)
    }
    return result
}

function getSums(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}

function testCondition(num){
    let result;
    if(Number.isInteger(num) === false){
        result = "ERROR"
    } else if(num < 0){
        result = "ERROR"
    } else {
        result = num
    }
    return result
}

const sumAll = function(int1, int2) {
    let result;
    if(testCondition(int1) === "ERROR" || testCondition(int2) === "ERROR"){
        result = "ERROR"
    } else{
        let arrayOfIntegers = getRange(int1, int2);
        result = getSums(arrayOfIntegers);
    }
    return result
};

// Do not edit below this line
module.exports = sumAll;
