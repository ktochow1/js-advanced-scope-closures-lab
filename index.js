function produceDrivingRange(blockRange){
  return function(startBlock, endBlock){
      var start = parseInt(startBlock);
      var end = parseInt(endBlock);
      var distanceToTravel = Math.abs(end - start);
      var difference = blockRange - distanceToTravel;

      if(difference >  0){
        return `within range by ${difference}`
      } else {
        return `${Math.abs(difference)} blocks out of range`
      }
  }
}

function produceTipCalculator(percent){
  return function(fare){
    return fare * percent;
  }
}

function createDriver(){
  var driverId = 0
  return class {
    constructor(name){
      this.id = ++driverId;
      this.name = name;
    }
  }
}
