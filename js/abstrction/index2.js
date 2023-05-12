class Car {
    constructor(make, model) {
      this._make = make;
      this._model = model;
      this._speed = 0;
    }
  
    get make() {
      return this._make;
    }
  
    get model() {
      return this._model;
    }
  
    get speed() {
      return this._speed;
    }
  
    accelerate(amount) {
      this._speed += amount;
    }
  
    brake(amount) {
      this._speed -= amount;
    }
  }
  
  const myCar = new Car('Toyota', 'Camry');
//   myCar.speed = 100;
  
  console.log(myCar.make); // Output: Toyota
  console.log(myCar.model); // Output: Camry
  console.log(myCar.speed); // Output: 0
  
  myCar.accelerate(30);
  console.log(myCar.speed); // Output: 30
  
  myCar.brake(20);
  console.log(myCar.speed); // Output: 10
  