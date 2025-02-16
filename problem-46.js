// problem
// tax 20% return korta hobe and valida korta hobe

function calculateTax(income, expense){
    if(typeof income !== 'number' || income < 0 || typeof expense !== 'number' || expense < 0){
        return 'Invalid Input';
    }
   let  taxableAmount = income - expense;
   let tax = taxableAmount * 0.2;
   return tax; 

}
const result = calculateTax(10000,4000);
console.log(result);