// problem
// Find the friend with the smallest name

function findSmallestName(name){
    let smallestName=name[0];
    for(let i =0; i < name.length; i++){
        const element = name[i];
        if(element.length < smallestName.length){
            smallestName = element;
        }
    } 
    return smallestName;

}

const smallName=['rahim','robin','rafi','ron','rashed'];
const result = findSmallestName(smallName);
console.log('This array the smallest name is:',result);