// problem
// You are given an array of numbers . Count how many times the a number is repeated in the array.

function findNumber(arr){

    if(!Array.isArray(arr)){
        return 'Invalid Input'
    }
    let count = 0;
     for(let number of arr){
        if(typeof number !== 'number'){
          return 'Invalide Input'
        }
        if(number === 98){
            count++;
        }
     }
     return count;
}

const numbers = [5,6,11,12,'98',5,98,98];
const result =findNumber(numbers);
console.log(result);

// function findNumber(arr){
//     let count = 0;
//      for(let number of arr){
//         if(number === 25){
//             count++;
//         }
//      }
//      return count;
// }

// const numbers2 = [5,6,11,12,98,5];
// const result2 =findNumber(numbers2);
// console.log(result2);