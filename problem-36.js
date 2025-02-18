// problem

// akta mobile price thake sobthaka kom taka ar mobile ta khanta hobe min bar korta hobe ?

// function phonePriceMin(price){
//     let min = price[0];
//     for(let dam of price){
//         if(dam < min)
//             min = dam;
//     }
//     return min;

// }

// const phonePrice= [20000,16000,50000,100000,12000,30000,35000];
// const resultMin = phonePriceMin(phonePrice);
// console.log(resultMin);


// const phones = [
//     { name: 'Samsung', price: 20000, camera: '12mp', color: 'black' },
//     { name: 'Relme', price: 25000, camera: '12mp', color: 'black' },
//     { name: 'Oppo', price: 30000, camera: '12mp', color: 'black' },
//     { name: 'Iphone', price: 100000, camera: '12mp', color: 'black' },
//     { name: 'Walton', price: 15000, camera: '12mp', color: 'black' },
//     { name: 'HTC', price: 5000, camera: '12mp', color: 'black' },
// ]


// function getCheapestPhone(phones){
//     let min = phones[0];
//     for(let phone of phones){
//         if(phone.price < min.price){
//             min = phone;
//         }
//     }
//     return min;
// }

// const phone = getCheapestPhone(phones);
// console.log("cheapest phone is:",phone);




function getExpensivePhone(phones){
     let max = phones[0];
    for(const phone of phones){
         if(phone.price > max.price){
            max = phone;
         }
    }
    return max;
}


const phones = [
    { name: 'Samsung', price: 20000, camera: '12mp', color: 'black' },
    { name: 'Relme', price: 25000, camera: '12mp', color: 'black' },
    { name: 'Oppo', price: 30000, camera: '12mp', color: 'black' },
    { name: 'Iphone', price: 100000, camera: '12mp', color: 'black' },
    { name: 'Walton', price: 15000, camera: '12mp', color: 'black' },
    { name: 'HTC', price: 5000, camera: '12mp', color: 'black' },
];
const result = getExpensivePhone(phones);
console.log("Expensive phone is :",result);