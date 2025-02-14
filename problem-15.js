// problem

// let  numbers = [1,2,3,3,4,4,4,5,7,8,9,10];

// hoporar array thaka sobthaka kon number ta boro sata bar korta hobe ?

// let  numbers = [1,2,3,3,4,4,4,5,7,8,9,10];

// let bigNumber = numbers[0];

// for(let i = 0; i < numbers.length; i++){
//     const element =numbers[i];
    
//     if(element > bigNumber){
//         bigNumber = element;
//     }
// }
// console.log(bigNumber);


let  numbers = [1,2,3,3,4,4,4,5,7,8,9,10];

let i = 1;
let bigNumber= [];
while( i < numbers.length - 1){
   
    
    if(i > bigNumber){
        bigNumber = i;
    }
    i++;
}
console.log(bigNumber);