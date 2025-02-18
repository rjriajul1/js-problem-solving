// problem
// Write a function to find the longest word in a given string.

// function findLongestWord(arr){
//     let words = arr.split(" ");
//     let bigWord = '';
//      for(const char of words){
        
//         if( char.length > bigWord.length){
//            bigWord = char;
            
//         }

//      }
//      return bigWord;

// }
// const identity = 'I am learning Programming to become a programmer.';
// const result = findLongestWord(identity);
// console.log(result);



const name = ['rahim','karim','halim','jalim','heroAlom'];
  let bigname = [];
for(let i = 0; i < name.length; i++){
    const element = name[i];
    if(element.length > bigname.length){
        bigname = element;
        
    }
   
}
console.log(bigname);

