const R = require('ramda');

let wasBornInCountry = person => person.birthCountry === 'UK';
const wasNaturalized = person => Boolean(person.naturalizationDate);
const isOver18 = person => person.age >= 18;

let isCitizen = person => wasBornInCountry(person) || wasNaturalized(person);
let isEligibleToVote = person => isOver18(person) && isCitizen(person);

const testUser = {
  age: 20,
  birthCountry: 'UK'
};

console.log(isEligibleToVote(testUser));

// Usando Ramda
wasBornInCountry = R.propEq('birthCountry', 'UK', )

isCitizen = R.either(wasBornInCountry, wasNaturalized);
isEligibleToVote = R.both(isOver18, isCitizen);

console.log(isEligibleToVote(testUser))