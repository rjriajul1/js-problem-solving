// problem

// Reverse the words of a sentence .Only the position of the word will be reversed check out the output?

const statement ='I am a hard working person';

let rev=statement.split(" ");
 let out = '';

for(let i = rev.length - 1; i >= 0; i--){
    const element = rev[i];

    out = out + element + " ";
    
}
console.log(out);


