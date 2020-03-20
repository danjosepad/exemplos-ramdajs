const R = require('ramda');

const users = [
  {
    id: 1,
    name: 'Daniel',
    role: 'admin'
  },
  {
    id: 2,
    name: 'Brunno',
    role: 'user'
  },
  {
    id: 3,
    name: 'Ramon',
    role: 'admin'
  }
]

const personIdx = id => R.findIndex(R.propEq('id', id), users) // Encontra o user
const roleLens = idx => R.lensPath([idx, 'role']) // Acha e recebe a role do user

const wLens = roleLens(personIdx(2)) // Aponta para o ID

const newUsers = R.over(wLens, role => 'admin', users) // Enfim altera o user para admin
console.log(newUsers)
/*
[
  { id: 1, name: 'Daniel', role: 'admin' },
  { id: 2, name: 'Brunno', role: 'admin' },
  { id: 3, name: 'Ramon', role: 'admin' }
]
*/