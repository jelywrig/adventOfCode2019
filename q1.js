const lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('input1.txt')
});

const calculateFuelForModule = function (weight) {

  let baseFuel = Math.floor(weight/3) - 2

  if (baseFuel <= 0 ) {
    return 0;
  }
  else return baseFuel + calculateFuelForModule(baseFuel);

}

let totalFuelRequirement = 0;

lineReader.on('line', line => {
  const moduleWeight = Number(line);
  const fuelForModule = calculateFuelForModule(moduleWeight);
  totalFuelRequirement += fuelForModule ; 
  console.log('total fuel requirement: ', totalFuelRequirement);
});


