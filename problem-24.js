// problem

// Write a function called odd_even() which will takes an integer value and tells whether this valu is even or odd .if even return Eevn.If odd return odd?


function oddEven(numbers){

    if( numbers % 2 === 1){
        return true;
        
    }else{
        return false;
    }
 }

const num =6;
const result = oddEven(num);
console.log(result);

