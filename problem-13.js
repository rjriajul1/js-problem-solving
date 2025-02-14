// problem

// var friends =['rahim', "karim", "abdul", "sadud", "heroAlom"]

// hoporar thaka fasta bondur moda kar name ta boro kuja bar korta hobe ?

// const friends = ['rahim', 'karim', 'abdul', 'sadul', 'heroAlom'];
// let bigName=friends[0];

// for(let i = 0; i < friends.length; i++){
//     const element = friends[i];

//     if(element.length > bigName.length){
//         bigName = element;
//     }
// }
// console.log(bigName);


const friends = ['rahim', 'karim', 'abdul', 'sadul', 'heroAlom'];
let bigfriends = friends[0];

for(let char of friends){

    if(char.length > bigfriends.length){
        bigfriends = char;
    }
}
console.log(bigfriends);