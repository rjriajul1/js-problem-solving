
// problem

// Give a product price as a string (e.g .. '$249), extract the numeric digits and calculted their sum.




let price = '$249';

let chars = price.split("");
// console.log(chars);
let sum = 0;
for ( let i = 0; i < price.length; i++){
    const element = price [i];
    // console.log(element);
    if(!isNaN(element) && element !== ' ' ){
       
        sum = sum + Number(element);

    }
}
console.log((sum));