// problem

// remove duplicate items from an array?

function biryaniKohor(names){
    console.log(names);
    let uniqueName =[];
    for(let name of names){
        if(uniqueName.includes(name) === false){
            uniqueName.push(name)

        }
    }
    return uniqueName;

}

const names = ['abul','babul','cabul','abul','babul','dabul','cabul','kabul'];
const result = biryaniKohor(names);
console.log("unique names:", result);