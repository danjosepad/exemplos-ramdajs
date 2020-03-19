const R = require('ramda');

const users = [
  {
    id: 1,
    name: 'Daniel'
  },
  {
    id: 2,
    name: 'Brunno'
  },
  {
    id: 3,
    name: 'Ramon'
  }
]

const findUser = R.find(R.propEq('id', 2), users)
// Busca dentro do array, o objeto que se encaixa com a busca (propEq)

console.log(findUser);