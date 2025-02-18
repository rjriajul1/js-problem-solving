// problem

// Give a product description as a string reverse the order of the words while keeping the characters is each word unchanged.

let sentence = 'Lightweight and durable backpack';

// console.log(sentence.length);
let word = sentence.split(" ");
let out = ' ';
for( let i = word.length - 1; i >= 0; i --){
       const element = word[i];

       out = out + " " + element;
    //    if(i > 0){
    //     out+= " ";
    //    }
    //    console.log(element);
        
}
console.log(out);


// let sentence = 'Lightweight and durable backpack';

// let rev = '';
// for(const char of sentence){
//     console.log(char);
//   rev = char + rev;
// }
// console.log(rev);
