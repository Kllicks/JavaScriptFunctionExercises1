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

//-----------Chris's explanation-----------------
// function isCityCool(city) {
//     return city.temperature < 70;
//     // if (city[`temperature`] < 70) {
//     //     return true;
//     // } else{
//     //     return false;
//     // }
// }

// function getName(city) {
//     return city.name;
// }

// function coolCities(citiesArray) {
//     // 1. Create the new array
//     // let resultingCities = [];

//     // 3.  look through the citiesArray and find those whose temp is less than 70
//     // citiesArray.forEach(function(city) {
//     //     if (isCityCool(city)) {
//     //         resultingCities.push(city);
//     //     }
//     // });
//     // let citiesThatAreCool = citiesArray.filter(isCityCool);
//     // return citiesThatAreCool.map(getName);
//     return citiesArray
//         .filter(isCityCool)
//         .map(getName);

//     // 2. return the new array
//     // return resultingCities;
// }