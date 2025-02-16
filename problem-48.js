// problem
// name moda number thakta hobe ar na thakla false return korta hobe ar jodi thake taila true return korba ar string hota hobe ar na hola invalid input return korba?

function checkDigitInName(name){

    if(typeof name !== 'string'){
        return 'Invalid Input';
    }
    let constainsDigit = false;
    
    for(let i = 0; i< name.length; i++){
        let char = name[i];
        // if(!isNaN(char) && name !== " " ){
        //     constainsDigit = true;
        //     break;
        // }
        if(char >= '0' && char <= '9'){
            constainsDigit = true;
            break;
        }
    }
 return constainsDigit;
}

const result =checkDigitInName('riajul2');
console.log(result);