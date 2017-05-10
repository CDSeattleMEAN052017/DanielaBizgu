function Vehicle(name, wheels, passengers, speed){
  if(!(this instanceof Vehicle)){
    return new Vehicle(name, wheels, passengers)
  }

  //PRIVATE
  var self=this
  var distance_travelled=0
  var updateDistanceTravelled=()=>{
    distance_travelled+=self.speed
    console.log(distance_travelled);
  }
 //PUBLIC
  this.name=name
  this.wheels=wheels
  this.passengers=passengers
  this.speed=speed
  this.vin=this.makeVin()
  this.move=function(){
    updateDistanceTravelled()
  }
  this.checkMiles=function(){
    console.log(distance_travelled)
    return this
  }
}


//Create methods using prototype

//Each vehicle should have a makeNoise method
Vehicle.prototype.makeNoise=function(noise){
  var noise=noise || "Beeeb!"
  console.log(noise)
  return this
}
//Have each vehicle generate a random VIN number (study Math.random & Math.floor).
Vehicle.prototype.makeVin=function(){
  var char="0123456789ABCEDGHIJKLMNOPQRSTUVWXYZ";
  var vin="";
  for (var i=0; i<13; i++){
    vin+=char[Math.floor(Math.random()*35)]
  }
  return vin
}


//Give the bus a pickUpPassengers method that takes in the number of passengers to pick up and adds them to the passenger count
var Bus=new Vehicle("Bus", 8, 12, 25)
Bus.pickUpPassengers=function(num){
  this.passengers+=num
  return this
}


// **************checks**************
var Bike=new Vehicle("bicycle", 2, 1, 15)
console.log(Bike.vin);
Bike.makeNoise("ring ring").makeNoise().makeNoise()

Bus.pickUpPassengers(10)
console.log(Bus.passengers);
