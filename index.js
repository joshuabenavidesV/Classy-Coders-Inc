const { Employee } = require("./classes/Employee")
const { Manager } = require("./classes/Manager")
const { SalesPerson } = require("./classes/SalesPerson")
const { SoftwareEngineer } = require("./classes/SoftwareEngineer")

// Run and debug your code here
// const preston = new Employee("Preston", "Engineer", 100000);
// const kiara = new Employee("Preston", "Engineer", 100000);

console.log(Employee.getTotalPayroll())
// console.log(Employee.allEmployees)





module.exports = {
    Employee,
    Manager,
    SalesPerson,
    SoftwareEngineer
}
