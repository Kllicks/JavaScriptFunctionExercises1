// Write a function which takes an array of city objects like such:
// var cities = [
//   { name: 'Los Angeles', temperature: 60.0},
//   { name: 'Atlanta', temperature: 52.0 },
//   { name: 'Detroit', temperature: 48.0 },
//   { name: 'New York', temperature: 80.0 }
// ];
// as input and returns a new array containing the cities whose temperature is cooler than 70 degrees.

let cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
  ];
 
function coldCities(arr) {
    return arr.temperature < 70;
}
let result = cities.filter(coldCities);
console.log(result);