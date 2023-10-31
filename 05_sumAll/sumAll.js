const sumAll = function(num1,num2) {
    let sum =0;
    let switchValue = 0;
    if(num1 > num2){
        switchValue = num2;
        num2 = num1;
        num1 = switchValue;
    }

    let isNegative = checkNegative(num1,num2);
    let isNumberType = checkType(num1,num2);

    while(isNegative === "" && isNumberType === ""){
        for(let i=num1; i <= num2; i++){
            sum += i;
        }
        return sum;
    }
    return "ERROR";
};

const checkNegative = (num1,num2) => {
    let resultSring = num1.toString();
    let resultSring2 = num2.toString();

    return (resultSring[0] === "-") ? "ERROR" :
        (resultSring2[0] === "-") ? "ERROR" : ""
};
const checkType = (num1,num2) => {
    let resultType = typeof num1;
    let resultType2 = typeof num2;

    return (resultType !== "number") ? "ERROR" :
        (resultType2 !== "number") ? "ERROR" : "";
}


// Do not edit below this line
module.exports = sumAll;
