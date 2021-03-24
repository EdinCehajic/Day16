// Only
class Car {
    constructor(manufacturer, model, production) {
      this.manufacturer = manufacturer;
      this.model = model;
      this.production = production;}
  }

// Only
const bmw = new CaretPosition("BMW", "BMW X3", 2003);
console.log(bmw.manufacturer);
console.log(bmw.model);
console.log(bmw.production);

module.exports = Car;