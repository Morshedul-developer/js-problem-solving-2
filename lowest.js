function lowest(numbers) {
    let min = numbers[0];
    for(const num of numbers) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}

const numbers = [25,785,8,754,85,784,57854,852,48,45,4];
const lowestNumb = lowest(numbers);
console.log("The lowest number is :", lowestNumb);