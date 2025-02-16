function waitingTime(array, serial){

    if(!Array.isArray(array) || typeof serial !== 'number'){
        return "Invalide Input";
    }
     let sum = 0;
    for(let i =0; i < array.length; i++){
        const element = array[i];
        sum = sum + element;

    }
    let averageTime = Math.round(sum / array.length);
     let remainingPerson = serial - 1 - array.length;
     let ramainingTime = 0;
     if(remainingPerson > 0){
        ramainingTime = remainingPerson *  averageTime;
     }
    
     return ramainingTime;
}


const result = waitingTime([4,7,9,5,3],10);
console.log(result);