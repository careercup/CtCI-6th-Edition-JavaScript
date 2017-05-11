var ParkingLot = function(spaces) {
  this.limit = spaces;
  this.number = 0;
  this.cars = {};
};

ParkingLot.prototype.park = function(car) {
  if (this.number <= this.limit) {
    if (this.cars[car.name] !== undefined) {
      console.log('car is already inside parking lot');
    } else {
      this.cars[car.name] = car;
      this.number++;      
    }
  } else {
    console.log('the parking lot is full!');
  }
};

ParkingLot.prototype.exit = function(car) {
  if (this.number === 0) {
    console.log('there are no cars in the parking lot');
  } else if (this.cars[car.name] === undefined) {
    console.log('the car is not in the parking lot');
  } else {
    delete this.cars[car.name];
    this.number--;
  }
};

ParkingLot.prototype.available = function() {
  return this.number < this.limit;
};