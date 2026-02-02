//* How to get layered discounts based on the product quantity 

function totalPrice(quantity) {
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if(quantity <= 100) {
        const total = quantity * first100Price;
        return total;
    }
    else if (quantity <= 200) {
        const first100Total = 100 * first100Price;
        const remainingQuantity = quantity - 100;
        const remainingPrice = remainingQuantity * second100Price;
        const total = first100Total + remainingPrice;
        return total;
    }
    else{
        const first100Total = 100 * first100Price;
        const second100Total = 100 * second100Price;
        const remainingQuantity = quantity - 200;
        const remainingPrice = remainingQuantity * above200Price;
        const total = first100Total + second100Total + remainingPrice;
        return total;
    }
}

const result = totalPrice(300);
console.log(result);