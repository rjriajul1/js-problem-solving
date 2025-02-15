// akta array vitor thake sob thake boro sonka ta bar korta hobe?

// function getMax(numbers){
//      let max = numbers[0];
//   for(let num of numbers){
//      if(num > max ){
//         max = num ;
//         // num = max;
//      }
//   }
//   return max;


// }
// const height= [43,76,89,54,90,54,32];
// const result = getMax(height);
// console.log(result);




//  akta array vitor thake sob thake boro sonka ta bar korta hobe?


function getMax(numbers){
    let max = numbers[0];
 for(let num of numbers){
    if(num < max ){
       max = num ;
       // num = max;
    }
 }
 return max;


}
const height2= [43,76,89,54,90,54,32];
const result2 = getMax(height2);
console.log(result2);
