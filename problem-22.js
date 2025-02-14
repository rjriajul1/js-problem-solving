// problem

// Write a function called make_avg () which take array of integers and the size of that array and return the average of those values.

function makeAvg(numbers) {
    let sum = 0;
    let avg = [];
    for (let i = 0; i < numbers.length; i++) {
       
        const element = numbers[i];
        sum = sum + element;
        avg = sum / numbers.length;
       
    }
    return avg ;
   

}
const num = [10,20,30,40,50];
const average = makeAvg(num);
console.log(average);