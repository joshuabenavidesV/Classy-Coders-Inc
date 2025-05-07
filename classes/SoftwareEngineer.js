const { Employee } = require("./Employee");

class SoftwareEngineer extends Employee{
    #programmingLanguages;

    constructor(name, position, salary, arr = []) {
        super(name, position, salary);
        this.#programmingLanguages = arr;
    };

    getProgrammingLanguages() {
        return this.#programmingLanguages;
    }

    setProgrammingLanguage(language) {
        this.#programmingLanguages.push(language);
    }    
}

module.exports = {
    SoftwareEngineer,
}