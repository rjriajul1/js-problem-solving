// problem

// Capitalize Every first Letter of each word in a String

const sentence = 'Capitalize Every first Letter of each word in a String';
let divide = sentence.split(' ');
 let string = '';
for(const char of divide){
        let element = (char.charAt(0).toUpperCase()+ char.slice(1));
        console.log(element);
        string = string + element + ' ' ;
}
console.log(string);
 























// const sentence = 'Capitalize Every first Letter of each word in a String';

// for(let i = 0; i < sentence.length; i++){
//     const element = sentence[i];
//     if( sentence.charAt(3).toUpperCase() + sentence.slice(3)){
        
//     }

    
// }
// console.log(sentence);
// console.log(otherString);
