// thin jonar modda kar number boro sa ta barkor ta nobe ?
// const tim = 156;
// const kim = 98;
// const jim = 80;


// if(tim > kim && tim > jim){
//     console.log("Tim is the big");
// }
// else if(kim > tim && kim > jim){
//     console.log("Kim is the big");
// }
// else{
//     console.log("Jim is the big");
// }



function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log('num1 is the big');
    }
    else if (num2 > num1 && num2 > num3){
        console.log('num2 is the big ');
    }
    else{
        console.log('num3 is the big');
    }
    return num1, num2,num3;

}

const max = maxOfThree(54, 87, 98);
console.log(max);

