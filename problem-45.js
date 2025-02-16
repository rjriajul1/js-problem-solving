// problem
// For each employee their current salary is calculated by multiplying yearly increment with exprience then adding the result to the starting salary.Now calculate is the total salary has to be provide by the company in a month.


function salary(salares) {
    let totalSalary = 0;

    for (let i = 0; i < salares.length; i++) {
        const employee = salares[i];

        let currentSalary = employee.starting + (employee.experience * employee.increment);
        console.log("The employee current salary everybody:",currentSalary);
        totalSalary = totalSalary + currentSalary;


    }
    return totalSalary;

}


const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

const companyMonthlyPay = salary(employees);
console.log("Company monthly salary proveding for all empolyee :",companyMonthlyPay);