// problem
// Write a function to convert temparature from Celsius to Fahrenheit?

function convertTemparature(temp) {
    const Celsius = temp * 9 / 5;
    const convert = Celsius + 32;
    return convert;
}

const number = 25;
const result = convertTemparature(number);
console.log("F =", result, "F");



// fahrenheit to celsius

function fahToCel(temp) {
    const fahrenheit = temp - 32 * 5 / 9;
    return fahrenheit;
}
const numbers = 50;
const temparature =fahToCel(numbers);

console.log(temparature);