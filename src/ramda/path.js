const R = require('ramda');

const bill = {
  nickname: 'bill',
  country: 'UK',
  personal: {
    profile: {
      name: 'Bill',
      surname: 'Williams',
      age: 20
    }
  }
}

const daniel = {
  nickname: 'Daniel',
  country: 'BR',
  personal: {}
}

let getSurname = user => 
  user &&
  user.personal &&
  user.personal.profile &&
  user.personal.profile.surname

// Com ramda

getSurname = user => R.path(['personal',
  'profile', 'surname'], user)

// Ou usando pathOr, para repassar valor caso retorne undefined

getSurname = user => R.pathOr('not set', 
['personal', 'profile', 'surname'], user)

console.log(getSurname(bill))
console.log(getSurname(daniel))