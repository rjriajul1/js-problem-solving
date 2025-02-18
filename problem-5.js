// problem

// Count how many times a string has the letter a

const sentence = 'Count how many times  a string has the letter ';

let count = 0;

for(let char of sentence){
    // console.log(char);
    
    if(char === 'a' || char === 'A'){
        count++;
       
    }
}
console.log(count);

// const sentence = 'Count how many times a string has the letter ';

// let sentenceSplite = sentence.split(" ");
// let count = 0;
// for(let i = 0; i < sentence.length; i++){
//     const element = sentence[i];
//     if(element === 'a'){
//       count++;
//     }
// }
// console.log(count);
