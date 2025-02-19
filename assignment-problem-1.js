
function calculateVAT(price) {

    if(typeof price !== 'number' || price < 0){
        return 'Invalid'
    }

        const vatCalculate = price * (7.5 / 100);
        return vatCalculate;

}
// const amount ="foo";
// const result = calculateVAT(amount);
// console.log(result);





function  validContact( contact ) {

if(typeof contact !== 'string'){
return "Invalid";
}
if(contact.length == 11 && contact.startsWith('01')){
   return true;
}else{
    return false
}

}

// const number = true;
// const result = validContact(number);
// console.log(result);





function willSuccess(marks) {
 if(!Array.isArray(marks)){
    return 'Invalid';
 }
let passCount = [];
let failCount = [];
for (const mark of marks) {
    if (mark >= 50 ) {
        passCount.push(mark)

    } else {
        failCount.push(mark)
    }
}
if(passCount.length > failCount.length){
    return true;
  }else{
    return false
  }
}


// const resultNumber = 90;
// const finalResult = willSuccess(resultNumber);
// console.log(finalResult);




function validProposal(person1, person2) {
if(typeof person1 !== 'object' || typeof person2 !== 'object' || Array.isArray(person1) || Array.isArray(person2)){
    return 'Invalid';
}
const ageDifference = Math.abs(person1.age - person2.age);
if (person1.gender.toLowerCase() !== person2.gender.toLowerCase() && ageDifference <= 7) {
    return true
} else {
    return false
}
}


// const firstPerson = "Mizan"
// const secondPerson ={ name: "bjoy", gender: "male", age: 32 } 
// const result = validProposal(firstPerson, secondPerson);
// console.log(result);




function calculateSleepTime(times) {

if(!Array.isArray(times)){
    return 'invalid'
}
let newObject = {
    hour:0,
    minute:0,
    second:0
}
let sum = 0;
for (const time of times) {
    sum = sum + time;
    if(typeof time !== 'number'){
        return 'Invalid'
    }

}
const convertHour = sum / 3600;
        const totalHour = parseInt(convertHour);
         newObject.hour = totalHour;
    
        const remainingSecond = sum - (totalHour * 3600);
        const convertMinutes = remainingSecond / 60;
        const totalMinutes = parseInt(convertMinutes);
    
        newObject.minute= totalMinutes;
        const remainingTotalSecond = remainingSecond - (totalMinutes * 60);
        newObject.second = remainingTotalSecond;
        return newObject;
}

// const seconds = [100, 3800, 90];
// const result = calculateSleepTime(seconds);
// console.log(result);
