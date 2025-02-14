// problem

// function takes an arry sa parameter 
// give me the average of the odd numbers in the array?

// function oddAverage(numbers){
//     let sum = 0;
//     // let avg = 0;
//    for(let number of numbers ){
//      if(number % 2 ===1){
//         sum= sum + number;
//       avg = sum / number;
//      }
//    }
  

//    return avg;
// }

// const arr = [2,5,8,6,9,2,3];

// const result = oddAverage(arr);
// console.log(result);





// function takes an arry sa parameter 
// give me the average of the even numbers in the array?

function evenAverage(numbers){
    let evens = [];
    for(const number of numbers){
        if(number % 2 === 0){
         evens.push(number);
         
        }
    }
    let sum = 0;
    for(let number of evens){
        sum = sum + number;
        
    }
    const count = evens.length;
     console.log(sum,count);
        const avg = sum / count;
    
    return avg;
    
   
    
    
    
}

const arr = [34,55,66,77,88,99,221];
const average = evenAverage(arr);
console.log(average);
