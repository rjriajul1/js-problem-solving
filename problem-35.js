// problem
// chair ---> 3 cft
// table ---> 10 cft
// bed ----> 50 cft

// function woodQuantity(chairQuantity, tabelQuantity, bedQuantity){
//     const perChairWood = 3;
//     const perTabelWood = 10;
//     const perBedWood = 50;

//     const chairTotalWood = chairQuantity * perChairWood;
//     const tableTotalWood = tabelQuantity * perTabelWood;
//     const bedTotalWood =   bedQuantity * perBedWood;

//     const total = chairTotalWood + tableTotalWood + bedTotalWood;

//     return total;
// }

// const result = woodQuantity(1,1,4);
// console.log(result);


// prblem

/**
 * Shirt price --> 500
 * pant price --> 300
 * shoe price --> 900
 */

function clothingPrice(shirt, pant, shoe) {
    const perShirtPrice = 500;
    const perPantPrice = 300;
    const perShoePrice = 900;

    const totalShirtPrice= shirt * perShirtPrice;
    const totalPantPrice = pant * perPantPrice;
    const totalShoePrice= shoe * perShoePrice;

    const total = totalShirtPrice + totalPantPrice + totalShoePrice;

    return total;

}

const result = clothingPrice(0,2,1);
console.log(result);