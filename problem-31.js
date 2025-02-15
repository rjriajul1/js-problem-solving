// problem
// Write a function to count the number of vowels in a string.

function sentence (str){
    let count = 0;
    for(const char of str){
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
          count++;
        }else if(char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U'){
            count++;
        }
    }
    return count;
} 

const identity = 'My name is Riajul Islam. Iam a student .';
const result = sentence(identity);
console.log(result);