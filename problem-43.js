// problem
// Your task is to calcultate the total budget required to buy electronics?

// const laptop = 35000;
// const tablet = 15000;
// const mobile = 20000;

// let total = laptop + tablet + mobile;
// console.log(total);


function totalPrice(num1,num2,num3 ) {
    const sum = num1 + num2 + num3;
    return sum;

}
const laptop = 35000;
const tablet = 15000;
const mobile = 20000;

const totalResult = totalPrice(laptop, tablet, mobile);
console.log(totalResult);
