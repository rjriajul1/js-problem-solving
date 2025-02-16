// problem
// You are given an array of phone objects,each containing information about the model,brand,and price.Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.


function findAveragePhonePrice(phones){
   let sum = 0;
   let count = phones.length;
   for(const phone of phones){
     const price = Number(phone.price);
     sum = sum + price;
   }
   let average = sum / count;
   return average;

}
const phones = [
    { model: "PhoneA", brand: "Iphone", price: "95000" },
    { model: "PhoneB", brand: "Samsung", price: "40000" },
    { model: "PhoneC", brand: "Oppo", price: "26000" },
    { model: "PhoneD", brand: "Nokia", price: "35000" },
    { model: "PhoneE", brand: "Iphone", price: "105000" },
    { model: "PhoneF", brand: "HTC", price: "48000" },
];

const avgResult = findAveragePhonePrice(phones);
console.log(avgResult);




// function findAveragePhonePrice(phones){
//     let sum = 0;
//     let count = phones.length;
//     for(let i = 0; i <phones.length; i++){
//         // const element = ;
//         sum = sum + Number(phones[i].price);
         
//     }
//     let average = sum / count;
//    return average;
// }

// const phones = [
//     { model: "PhoneA", brand: "Iphone", price: "95000" },
//     { model: "PhoneB", brand: "Samsung", price: "40000" },
//     { model: "PhoneC", brand: "Oppo", price: "26000" },
//     { model: "PhoneD", brand: "Nokia", price: "35000" },
//     { model: "PhoneE", brand: "Iphone", price: "105000" },
//     { model: "PhoneF", brand: "HTC", price: "48000" },
// ];

// const avg= findAveragePhonePrice(phones);
// console.log(avg);