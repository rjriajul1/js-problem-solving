// problem
// Count how many times a string has the letter a or A

const sentence ='Count how many times a string has the letter a or A';

let count = 0;
for (let letter of sentence){
    console.log(letter);

    if(letter === "a" || letter === "A"){
        
            count++;
    }
}
console.log(count);