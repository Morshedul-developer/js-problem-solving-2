//* max between two numbers

function getMax(num1,num2) {
    if(num1 > num2) {
        return num1;
    }
    return num2;
}

const max1 = getMax(54,68);
const max2 = getMax(85,156);
const ultimateMax = getMax(max1,max2);
console.log(ultimateMax);