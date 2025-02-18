// problem

// object thake sum bar korta hobe 

function sumCalculate(total) {
    // console.log(total);
    let sum = 0;
     for(let single of total){
        // console.log(single.price);
            sum = single.price + sum;
     }
     return sum;
}

const total = [
    { name: 'Shampoo', price: 300 },
    { name: 'Chiruni', price: 100 },
    { name: 'Shirt', price: 700 },
    { name: 'Pant', price: 1200 },
];
const result = sumCalculate(total);
console.log(result);



// function cartProduct(products) {
//     let total = 0;
//     for (const product of products) {
//         // const thisProductCost = product.price * product.quantity;
//         total = total + product.price * product.quantity;

//     }
//     return total;
// }

// const total = [
//     { name: 'Shampoo', price: 300, quantity: 2 },
//     { name: 'Chiruni', price: 100, quantity: 3 },
//     { name: 'Shirt', price: 700, quantity: 1 },
//     { name: 'Pant', price: 1200, quantity: 2 },
// ];
// const result = cartProduct(total);
// console.log(result);

