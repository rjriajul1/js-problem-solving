// problem

// Use a for ... of loop to concatenate all the elements of an array into a single string?

// var numbers =['Tom', 'Tim', 'Tin', 'Tik'];

// let result =" ";
// for(let char of numbers){

//     result= result + char;
 
    
    
// }
// console.log(result.trim());


var numbers =['Tom', 'Tim', 'Tin', 'Tik'];
let result ='';
for( let i =0; i < numbers.length; i++){
   const element = numbers.concat()[i];

   result += element;


}
console.log(result);