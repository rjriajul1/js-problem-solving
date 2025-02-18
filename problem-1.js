// problem

// *
// *Give ona array names, remove duplicates whils presrbing the orginal order. Use a loop to achive this without delining a function.

let products = ['Laptop', 'Phone', 'Laptop', 'Tablet', 'Phone'];


let productsName = [];
for( let  i = 0; i < products.length; i++){
    const element = products[i];

    if(!productsName.includes(element)){
        productsName.push(element);
    }
}
console.log(productsName);

// let products = ['Laptop', 'Phone', 'Laptop', 'Tablet', 'Phone'];

// let uniqueProducts = [];
// for (let i = 0; i < products.length; i ++){
//      const element = products[i];
    
//      if(!uniqueProducts.includes(element)){

//         uniqueProducts.push(element);
       
//      }
// }
// console.log(uniqueProducts);