const R = require('ramda');

const users = [
  {
    id: 1,
    name: 'Daniel',
    isActive: true,
    role: 'admin'
  },
  {
    id: 3,
    name: 'Brunno',
    isActive: false,
    role: 'user'
  },
  {
    id: 2,
    name: 'Ramon',
    isActive: true,
    role: 'admin'
  }
]

const areAllActive = R.all(R.propEq('isActive', true))
// Valida se TODOS os elementos no array possuem 'isActive' true

console.log('areAllActive', areAllActive(users))
// areAllActive false

const isOneActive = R.any(R.propEq('isActive', true))
// Se ao menos um satisfaz a condição

console.log('isOneActive', isOneActive(users))
// isOneActive true

const isNoOneActive = R.none(R.propEq('isActive', true))
// Se nenhum satisfaz a condição, se nenhum satisfazer, retorna true

console.log('isNoOneActive', isNoOneActive(users))
// isNoOneActive false

//Validar vários parametros
const userAdmin = {
  name: 'Daniel',
  isActive: true,
  role: 'admin'
}


const isActiveAdmin = R.allPass([ // Todos as condições precisam passar
  R.propEq('isActive', true),
  R.propEq('role', 'admin')
])

console.log('isActiveAdmin', isActiveAdmin(userAdmin)) 
// isActiveAdmin true

const isActiveOrAdmin = R.anyPass([ // Ao menos uma das condições passam
  R.propEq('isActive', false),
  R.propEq('role', 'admin')
])

console.log('isActiveOrAdmin', isActiveOrAdmin(userAdmin))
// isActiveOrAdmin true
