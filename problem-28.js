// problem

// remove duplicate items from an array?

function biryaniKohor(names){
    // console.log(names);
    let uniqueName =[];
    for(let name of names){
        const element = name.charAt(0).toUpperCase() + name.slice(1);
        // console.log(element);
        if(uniqueName.includes(element) === false){
            uniqueName.push(element)

        }
    }
    return uniqueName;

}

const names = ['abul','babul','cabul','abul','babul','dabul','cabul','kabul'];
const result = biryaniKohor(names);
console.log("unique names:", result);