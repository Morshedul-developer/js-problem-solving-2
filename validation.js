// function getSum(num1,num2) {
//     if(typeof num1 !== 'number' || typeof num2 !== "number") {
//         return "Please give an integer";
//     }
//     const sum = num1 + num2;
//     return sum;
// }

// console.log(getSum(1,'5'));
// console.log(getSum(1,5));
// console.log(getSum('8',5));


function getSecond(numbers) {
    // if(Array.isArray(numbers) === false){
    // or
    if(!Array.isArray(numbers)){
        return "Please provide an array";
    }
    const second = numbers[1];
    return second;
}

// console.log(getSecond([2,5,8]));
console.log(getSecond(5));