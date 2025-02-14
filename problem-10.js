// problem
// amon akta program likta hobe j input korla console a bola dida j aita even number naki odd number
let number = [32, 55, 78, 21, 90, 54, 53];

for( let i = 0; i < number.length; i++){
    const element=  number[i];
    
    if(element % 2 === 0){
        console.log("This is even number:", element);
    }else if(element % 2 !==0){
        console.log('This number is a odd number:', element);
    }
}
