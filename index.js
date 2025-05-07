const { Employee } = require("./classes/Employee")
const { Manager } = require("./classes/Manager")
const { SalesPerson } = require("./classes/SalesPerson")
const { SoftwareEngineer } = require("./classes/SoftwareEngineer")

// Run and debug your code here
const preston = new Employee("Preston", "Engineer", 100000);
// const kiara = new Employee("Preston", "Engineer", 100000);

const malik = new SalesPerson("Malik", "Enterprise Sale Associate", 90000, ["Vine", "MySpace", "Shutterfly"])


// console.log(Employee.getTotalPayroll())
// console.log(Employee.allEmployees)

// preston.setSalary(-1);

console.log(malik.findClient("MySpace"));







module.exports = {
    Employee,
    Manager,
    SalesPerson,
    SoftwareEngineer
}
