//* Creating a simple calculator

function add(num1,num2){
    const sum = num1 + num2;
    return sum;
}

function subtract(num1,num2){
    const sub = num1 - num2;
    return sub;
}

function multiply(num1,num2){
    const mul = num1 * num2;
    return mul;
}

function divide(num1,num2){
    const div = num1 / num2;
    return div;
}

function calculator(a,b,operator){
    if(operator === 'add') {
        const result = add(a,b);
        return result;
    }
    else if(operator === 'subtract'){
        const result = subtract(a,b);
        return result;
    }
    else if(operator === 'multiply'){
        const result = multiply(a,b);
        return result;
    }
    else if(operator === 'divide'){
        const result = divide(a,b);
        return result;
    }
    else{
        return "Oops! This calculator supports only addition, subtraction, multiplication, and division."
    }
}

// console.log(calculator(1,2,'add'));
// console.log(calculator(1,2,'subtract'));
// console.log(calculator(1,2,'multiply'));
console.log(calculator(6,2,'divide'));
// console.log(calculator(1,2,'root'));