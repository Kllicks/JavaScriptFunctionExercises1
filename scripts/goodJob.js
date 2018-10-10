// Given an array of people's names:

// Print out 'Good Job, {{name}}!' for each person's name, one on a line.

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
  
  people.forEach(function(item){
      console.log(`Good Job ${item}`);
  })
  