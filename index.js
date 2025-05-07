const { Employee } = require("./classes/Employee")
const { Manager } = require("./classes/Manager")
const { SalesPerson } = require("./classes/SalesPerson")
const { SoftwareEngineer } = require("./classes/SoftwareEngineer")

// Run and debug your code here
const preston = new Employee("Preston", "Engineer", 100000);
console.log(preston)
console.log(preston.setSalary(105000))
console.log(preston)





module.exports = {
    Employee,
    Manager,
    SalesPerson,
    SoftwareEngineer
}
