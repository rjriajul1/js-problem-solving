// problem 
// amone akta program liko jakana number input korla bola dibe j leaper ki na?

// let year = 2024;

// let isLeaper = (year % 4 === 0 && year % 100 !==0) || (year % 400 ===0);

// console.log('This is a leaper year:', isLeaper);


let year = [1995, 1999, 2002, 2010, 2015, 2020, 2024,2052];

for (let i = 0; i< year.length; i++){
    const element = year[i];
    if(element % 4 === 0 && element % 100 !==0 || element % 400 === 0){
        console.log("This is a leaper year:", element);
    }else{
        console.log('This is not leaper year ');
    }
}
