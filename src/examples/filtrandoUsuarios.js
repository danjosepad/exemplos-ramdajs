const R = require('ramda');
//Objetivo: Achar um usuário que tenha id 1 e que seja admin


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

const findUser = R.filter(
  R.where({
    id: R.equals(1),
    role: R.equals('admin')
  })
)

console.log(findUser(users))

// [ { id: 1, name: 'Daniel', role: 'admin' } ]
