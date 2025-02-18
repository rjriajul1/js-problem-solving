// problem
// Write a function to count the number of vowels in a string.

function sentence (str){
//  let count = 0;

//     for(const singleVowel of vowels){
//         // console.log(singleVowel);
//        const lowerExample = str.toLowerCase();
//     //    console.log(lowerExample);
//        const isPresent = lowerExample.includes(singleVowel);
//     //    console.log(isPresent);
//        if(isPresent !== true){
//            count++;
         
//        }
//     }
//     return count;

    let count = 0;
    for(const char of str){
        if(char === 'a' || char === 'e' || char === 'i' || char=== 'o' || char === 'u'){
          count++;
        }else if(char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U'){
            count++;
        }
    }
    return count;
} 
// const vowels = ['a','i','o','u','e'];
const exampleString = 'My name is Riajul Islam. Iam a student .';
// let isAllvowelIsPresent = true;
const result = sentence(exampleString);
console.log(result);

