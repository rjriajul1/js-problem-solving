// problem

// discount konti kota sata kuja bar korta hobe

/** 
 * up to 100: ---> 100
 * more than 101-200: --> 90
 * more than 200: --> 70
*/

// function discountedPrice(quantity) {
//     if (quantity <= 100) {
//         const total = quantity * 100;
//         return total;
//     }
//     else if (quantity <= 200) {
//         const total = quantity * 90;
//         return total;
//     }
//     else {
//         const total = quantity * 70;
//         return total;
//     }

// }

// const total = discountedPrice(201);
// console.log("discount price is :", total);



// problem
/**
 * 100: --->100
 * 101 to 200: ---> 90
 * above200: ---> 70
 */

function layeredDiscountTotal(quantity) {
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if(quantity <=100){
        const total= quantity * 100;
        return total;
    }
    else if(quantity <= 200){
        const First100Price = 100 * first100Price;
        const remainingQuantity = quantity - 100;
        const remainingTotal = remainingQuantity * second100Price;
        const total = First100Price + remainingTotal;
        return total;
    }
    else{
        const First100Price = 100 * first100Price;
        const Second100Price = 100 * second100Price;
        const remainingQuantity = quantity - 200;
        const remainingTotal = remainingQuantity * above200Price;
        const total = First100Price + Second100Price + remainingTotal;
        return total;
    }
}
const total = layeredDiscountTotal(201);
console.log('Total layer discount is :',total);