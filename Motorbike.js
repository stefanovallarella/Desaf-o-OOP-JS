const Vehicle = require('./Vehicle');
const Helper = require('./Helper.js');

class Motorbike extends Vehicle {
    constructor(brand, model, cylinders, price) {
    super(brand, model, price)
    this.cylinders = cylinders;
    }
    
    showFull() {

        const newHelper = new Helper();
        let price = this.price;

        const priceFormated = newHelper.formatPrice(price);

        return console.log(`Marca: ${this.brand} // Modelo: ${this.model} // Cilindrada: ${this.cylinders} // Precio: $${priceFormated}`);
        
    }

}

module.exports = Motorbike;