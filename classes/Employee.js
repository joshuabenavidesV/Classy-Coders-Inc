class Employee {
    #salary;
    #isHired;
    constructor(name, position, salary, isHired = true){
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
    
}

module.exports = {
    Employee,
}
