class Employee {
    #salary;
    #isHired;
    static allEmployees = [];
    constructor(name, position, salary, isHired = true){
        Employee.allEmployees.push(this)
        this.name = name;
        this.position = position;
        this.#salary = salary;
        this.#isHired = isHired;
    }
    getSalary(){
        return this.#salary;
    }
    setSalary(amount){
    return  this.#salary = amount;
    }
    getStatus(){
        return this.#isHired;
    }
    setStatus(command){
        if(command === `hire`){
            this.#isHired = true;
            return this.#isHired
        }
        if(command === `fire`) {
            this.#isHired = false;
            return this.#isHired;
        }
        else {
            throw new Error (`Command was not hire or fire`);
        }
    }

    static getEmployees() {
        console.log(Employee.allEmployees)
        return Employee.allEmployees;
    }

    static getTotalPayroll() {
        // console.log(Employee.allEmployees.reduce((acc, m) => (acc + m.salary), 0))
        return Employee.allEmployees.reduce((acc, m) => (acc + m.getSalary()), 0)
    }
    
}

module.exports = {
    Employee,
}
