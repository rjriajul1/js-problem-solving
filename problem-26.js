// problem

// SIMPLE LOGIC:
// year will be a leap year if the is divisible by 4?

// function isLeapYear(year){
//     if(year % 4 === 0){
//         return true;
//     }else{
//         return false;
//     }
// }

// const lipiYear= 2043;
// const result = isLeapYear(lipiYear);
// console.log(result);


// Those year that is not divisible by 100 and if the year is divisible by 4 then it will be a leap year

function isLeapYear2(year){
    if(year % 100 !==0 && year % 4 === 0 || year % 400 === 0){
        return true;
    }else{
        return false;
    }
}                     

const result = isLeapYear2(2024);
console.log(result);