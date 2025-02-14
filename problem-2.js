// problem 

// Given an array of products , each with a categoray, seprate them into two arrays : one for electronics and for clothing . Store the result in on object.

let product =[
    {name: 'Labtop', category: 'Electronics'},
    {name: 'T-Shirt', category: 'Clothing'},
    {name: 'Headphones', category: 'Electronics'},
    {name: 'Jeans', category: 'Clothing'}
];

let categrized={
    electronics:[],
    clothing:[],
}

for(let i = 0; i < product.length; i++){
    const element = product[i];
    if(element.category === 'Electronics'){
        categrized.electronics.push(element.name);
    }
    else if(element.category ==='Clothing'){
        categrized.clothing.push(element.name);
    }
       
    

}
console.log(categrized);
