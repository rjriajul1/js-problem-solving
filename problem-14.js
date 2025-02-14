// problem

// var numbers = [1,2,3,3,4,4,4,5,6,7,8.9,10]

// hoporar number thaka duplicate number gula bata diya qniue number gula bar korta hobe?

// var numbers = [1,2,3,3,4,4,4,5,7,8,9,10];

// let uinqueNambur=[];

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//    if(!uinqueNambur.includes(element)){
//     uinqueNambur.push(element)
    
//    }
// }
// console.log(uinqueNambur);

let  numbers = [1,2,3,3,4,4,4,5,7,8,9,10];

let uniqueNam=[];

for(let char of numbers){

    console.log(char);

    if(!uniqueNam.includes(char)){
        uniqueNam.push(char);
    }
}
console.log(uniqueNam);