const { Employee } = require("./Employee");

class SalesPerson extends Employee  {
    #totalSales
    constructor(name, position, salary, clients, totalSales = 0){
        super(name, position, salary)
        this.clients = clients;
        this.#totalSales = totalSales
    }
    getSalesNumbers(){
        return this.#totalSales
    }
    makeSale(amount){
        return this.#totalSales += amount
    }

    findClient(client) {
        return this.clients.find((item) => (item === client));
    }
    
}

module.exports = {
    SalesPerson,
}