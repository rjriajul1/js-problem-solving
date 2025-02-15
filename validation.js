function numberValidation(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Please provide a number';
    }
    const sum = num1 + num2;
    return sum;
}

const numbers = numberValidation(5, 7);
console.log(numbers);



function names(nam1, nam2) {

    if (typeof nam1 !== 'string') {
        return 'Please provide first name string';
    } else if (typeof nam2 !== 'string') {
        return 'Please provide second name string';
    }
    const full = nam1 + ' ' + nam2;
    return full;


}

const name = names('Riajul', 'Islam');
console.log(name);



function getProduct(product) {
    if (typeof product !== 'object') {
        return 'Please provide a object'
    }
    const price = product.price;
    return price;
}

const product =getProduct({name:'Shampoo', price:200 });
// const product = getProduct(200)
console.log(product);



function getSecond(arr) {
    if(Array.isArray(arr) !== true){
        return 'Please provide a array';
    }
    const second = arr[1];
    return second;
}
const number = getSecond(8);
console.log(number);
