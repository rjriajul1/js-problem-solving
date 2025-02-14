// problem 

// Take a number if the number is odd multiply it by 2 and  return the result . If the number is even divide it by two and return teh result .

function multiplyOfEvenNumber(numbers){
    if(numbers % 2 === 1){
        const result = numbers * 2;
        return result;
    }else if(numbers % 2 !==1){
        const result = numbers / 2;
        return result;
    }
   
}

const num = 32;

const result = multiplyOfEvenNumber(num);
console.log(result);