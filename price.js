function totalPrice(shirtQuantity,pantQuantity,shoeQuantity) {
    const shirtPrice = 500;
    const pantPrice = 300;
    const shoePrice = 900;

    const totalShirt = shirtPrice * shirtQuantity;
    const totalPant = pantPrice * pantQuantity;
    const totalShoe = shoePrice * shoeQuantity;

    const total = totalShirt + totalPant + totalShoe;

    return total;
}

const total = totalPrice(1, 2, 1);
console.log(total);