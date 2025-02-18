// problem

// Use a for ... of loop to concatenate all the elements of an array into a single string?

// var numbers =['Tom', 'Tim', 'Tin', 'Tik'];

// let result =" ";
// for(let char of numbers){

//     result= result + char;
 
    
    
// }
// console.log(result.trim());


var words =['Tom', 'Tim', 'Tin', 'Tik'];
let result ='';
for( let i =0; i < words.length; i++){
   
   const currentWord = words[i]
   if(i == words.length - 1){
      result = result +  currentWord  ;

   }else{
      result = result +  currentWord + ' ' ;
   }
   
  
  
   
}
console.log(result);