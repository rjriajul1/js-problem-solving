// problem

// Write a function called count_zero() which will take a binary string(Binary string a string which is consist of only 0 and 1) as parameter and conunt how many 0's are there in that string?

function sentence(str){

let count = 0;

for(let char of str){
    // console.log(char);
    
    if(char === '0'){
        count++;
    
    }
}

return count;

}

const str = ['0','1','0','1','0','1','0'];
const result =sentence(str);
console.log(result);



