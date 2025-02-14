// problem

// Write a JavaScript code to get the even numbers from an arry using any looping technique?

// const numbers = [12, 98, 5, 41, 23, 78, 46];

// numbers[5]=76;

// let evenNumber =[];
// for(let i =0; i < numbers.length; i++){
//     const element = numbers[i];
//     if(element % 2 === 0){
       
//    evenNumber.push(element)
//     }
// }
// console.log(evenNumber);



const numbers = [12, 98, 5, 41, 23, 78, 46];

let n = 0;
let evenNumber =[];
numbers[5]=76;
while( n < numbers.length){
    const element =numbers[n];
    n++;
    if(element % 2 === 0){
        evenNumber.push(element)
    }
  
}
console.log(evenNumber);
