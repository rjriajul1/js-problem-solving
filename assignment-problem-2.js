// function cashOut(money){

//     if(typeof money !=='number' || money < 0){
//         return 'Invalid'
//     }
//     const cashOutChese= money * (1.75 / 100);
//     return parseFloat(cashOutChese.toFixed(4));

// }

// const amount = 2000;
// const result = cashOut(amount)
// console.log(result);


// function validEmail(email){

//    for( let i = 0; i < email.length; i ++){
    
//     if(email.startsWith() == '+-' && email !== ' ' && email.endsWith('.com')){
//         return true;
//     }
//     else{
//         return false
//     }
//    }
   

// }
// const email = 'riajul@gmail.com';
// const result = validEmail(email);
// console.log(result);

// function electionRsult(votes){
//     if(!Array.isArray(votes)){
//         return 'Invalid'
//     }
//       let party1 =0;
//       let party2 = 0;
//     for(const vote of votes){
//         if(vote === 'mango'){
//            party1++;
           
//         }else if(vote === 'banana'){
//             party2++;
//         }
//         }
//         // console.log(party2);
//         if(party1 > party2){
            
//             return 'Mango';
            
//         }else if(party1 == party2){
//             return 'Draw';
//         }
//         else{
//             return 'Banana'
            
//         }

// }
// const partyName = ['mango','bananA',"na vote","na vote"];
// const result = electionRsult(partyName);
// console.log(result);


// function isBestFriend(bestFriend1,bestFriend2){
//     if(typeof bestFriend1 !== 'object' || typeof bestFriend2 !== 'object'|| Array.isArray(bestFriend1) || Array.isArray(bestFriend2)){
//         return 'Invalid'
//     }
      
//     if(bestFriend1.roll == bestFriend2.bestFriend && bestFriend2.roll == bestFriend1.bestFriend){
//         return true;
//     }else{
//         return false;
//     }
// }

// const friend1 ={
//     name:'hashem',
//     roll:21,
//     bestFriend:1
// }
// const friend2 = ['kashem er kono dondhu nai']


// const result = isBestFriend(friend1,friend2);
// console.log(result);



function calculateWatchTime(times){
    if(!Array.isArray(times)){
        return 'Invalid'
    }
    let totalWatchTime = {
        hour:0,
        minute:0,
        second:0
    }
    let sum =0;
    for(const time of times){
       sum = sum + time;
       if(typeof time !== "number"){
        return 'Invalid'
       }
    
    }
   const convertHour = sum / 3600;
   const totalHour = parseInt(convertHour);
   const remainingSecond = sum - (totalHour * 3600);
   console.log(remainingSecond);
   totalWatchTime.hour = totalHour;
  
   const convertMinutes = remainingSecond / 60;
   const totalMinutes = parseInt(convertMinutes);
   totalWatchTime.minute = totalMinutes;
  
   const remainingTotalSecond = remainingSecond - (totalMinutes * 60);
   totalWatchTime.second = remainingTotalSecond;
   return totalWatchTime;
    
}

const watchTime = [1000,2000,700];
const result = calculateWatchTime(watchTime)
console.log(result);