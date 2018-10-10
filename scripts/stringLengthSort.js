// Sort the same array, but not by alphabetical order, but by how long each name is, shortest name first.

let people = [
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
  ];

people.sort(function(a, b){
    return a.length - b.length;
})
console.log(people);