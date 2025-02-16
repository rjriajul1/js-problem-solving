// problem
// addmission exam jodi tar testScore 45 and schoolGrade 25 hoy and tar father farmer hoy taila 20 extra add hobe ar sob maila jodi <=80 hoy taila sa admit korta parba ar hola par ba na?


function calculateFinalScore(input){

    if(typeof input !== "object"){
        return 'Invalid Input';
    }
    if(typeof input.name !== "string" || typeof input.testScore !== 'number' || typeof input.schoolGrade !== 'number' || typeof input.isFFamily !== 'boolean'){
        return 'Invalid Input';
    }
     let fianlScore = input.testScore + input.schoolGrade;
    if(input.isFFamily == true){
        fianlScore = fianlScore + 20;
        
    }
    if(fianlScore >= 80){
        return true;
    }
    else{
        return false;
    }
    
    
}

let result = calculateFinalScore({
    name: 'rakib',
    testScore: 45,
    schoolGrade:25,
    isFFamily: true
})


console.log(result);