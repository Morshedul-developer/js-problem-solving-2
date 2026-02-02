// Find out the highest number and lowest number

function highestNumber(numbers) {
    let max = numbers[0];
    for(const number of numbers) {
        if(number > max) {
            max = number;
        }
    }
    return max;
}

const numbers = [25,785,8,754,85,784,57854,852,48,45,4];
const highestNumb = highestNumber(numbers);
console.log("The highest number is :", highestNumb);