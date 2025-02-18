// problem
// Check whether a string contains all the vowels a, e, i, o, u

const vowels = ['a','e','o','i','u'];

const exampleString = 'aeoiU';
let isAllvowelIsPresent = true;

for(const singleVowel of vowels){
   const lowerExample = exampleString.toLowerCase();
   const isPresent = lowerExample.includes(singleVowel);
   if(isPresent == false){
     isAllvowelIsPresent = false;
     break;
   }
}
console.log(isAllvowelIsPresent? "All ok" : "Not OK");



