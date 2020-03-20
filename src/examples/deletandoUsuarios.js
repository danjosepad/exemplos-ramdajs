const R = require('ramda');
// Objetivo: Deletar um usuário de um array baseado na role

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

const deleteAdmins = R.reject(user => user.role === 'admin');

console.log(deleteAdmins(users));
// [ { id: 2, name: 'Brunno', role: 'user' } ]