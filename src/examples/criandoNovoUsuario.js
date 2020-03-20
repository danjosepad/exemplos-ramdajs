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

const newUser = {
  id: 4,
  name: 'New User',
  role: 'user'
}
const UserCreated = R.append(newUser)

console.log(UserCreated(users))
/*
 [
  { id: 1, name: 'Daniel', role: 'admin' },
  { id: 2, name: 'Brunno', role: 'user' },
  { id: 3, name: 'Ramon', role: 'admin' },
  { id: 4, name: 'New User', role: 'user' }
 ] 
*/