const Vehicle = require('./Vehicle');
const Helper = require('./Helper.js');

class Car extends Vehicle{ 
    constructor(brand, model, doors, price) {
    super(brand, model, price)
    this.doors = doors;
    }
    
    showFull() {

        const newHelper = new Helper();
        let price = this.price;

        const priceFormated = newHelper.formatPrice(price);

        return console.log(`Marca: ${this.brand} // Modelo: ${this.model} // Puertas: ${this.doors} // Precio: $${priceFormated}`);

    }
    
}

module.exports = Car;
