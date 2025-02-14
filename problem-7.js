// problem
// Check whether a string contains all the vowels a, e, i, o, u

const vowels =' You should be able to check whether x or X exsts. After that, search onlne how to replace a character n a stirng';

let check = 0;
for(let char of vowels){
   if(char === 'a' && char === 'e' && char === 'i' && char === 'u' && char === 'o' ){
     check++;
     console.log('This contain has all vowels', check);
   }
}

