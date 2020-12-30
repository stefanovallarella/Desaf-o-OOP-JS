const Car = require('./Car.js');
const Motorbike = require('./Motorbike.js');
const Helper = require('./Helper.js');

class VehicleDealer {
    constructor(){
    }

    allVehicles(){

      const vehiclesArray = [];

      const car1 = new Car('Peugeot', '206', 4, 200000.00);
      const motorByke1 = new Motorbike('Honda', 'Titan', '125cc', 60000.00);
      const car2 = new Car('Peugeot', '208', 5, 250000.00);
      const motorByke2 = new Motorbike('Yamaha', 'YBR', '160cc', 80500.50);
      
      vehiclesArray.push(car1, motorByke1, car2, motorByke2)
      return vehiclesArray;
    }

    showAllVehicles(fullList){
       fullList.forEach(item=>{
         item.showFull();
       })  
    }

    mostExpensive(vehiclesArray){
        const max = vehiclesArray.reduce(function(prev, current) {
            return (prev.price > current.price) ? prev : current
        })
        return max;
    }

    cheapestVehicle(vehiclesArray){
        const min = vehiclesArray.reduce(function(prev, current) {
            return (prev.price < current.price) ? prev : current;
        })
        return min;
    }

    findVehiclewithY(vehiclesArray){
        const vehicleWithY = vehiclesArray.find(vehicle => {
          let model = vehicle.model;
          return model.indexOf('Y') > -1;
        })
        return vehicleWithY;
    }

    priceMaxToLower(vehiclesArray){
      const vehiclesReordered = vehiclesArray.sort((vehicleA, vehicleB)=>{

        let priceA = vehicleA.price;
        let priceB = vehicleB.price;
        let result = 0;
        if (priceA < priceB) {
          result = 1;
        } else if (priceA > priceB) {
          result = -1;
        }
        return result;
      }) 
      return vehiclesReordered; 
    }


    printAllLogs(){

      const newHelper = new Helper();
      const fullList = this.allVehicles();

      this.showAllVehicles(fullList);
      newHelper.hrLine();

      const mostExpensiveVehicle = this.mostExpensive(fullList);
      const cheaperVehicle = this.cheapestVehicle(fullList);
      const vehiclewithY = this.findVehiclewithY(fullList);
      const sortMaxToLower = this.priceMaxToLower(fullList);
      
      console.log(`Vehículo más caro: ${mostExpensiveVehicle.brand} ${mostExpensiveVehicle.model}`);
      console.log(`Vehículo más barato: ${cheaperVehicle.brand} ${cheaperVehicle.model}`);
      console.log(`Vehículo que contiene en el modelo la letra ‘Y’: ${vehiclewithY.brand} ${vehiclewithY.model} $${newHelper.formatPrice(vehiclewithY.price)}`);
      newHelper.hrLine();
      console.log(`Vehículos ordenados por precio de mayor a menor:`);
      sortMaxToLower.forEach(vehicle => {
        console.log(`${vehicle.brand} ${vehicle.model}`);
      })
    }
} 



const concesionaria = new VehicleDealer();

// Impresión de todos los Logs.
concesionaria.printAllLogs();