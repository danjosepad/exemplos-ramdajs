const R = require('ramda');

const array = [1, 2, 3]
const newArray = R.append(4, array)

console.log(array)
 // Array inicial
console.log(newArray) 
// Novo array criado a partir do primeiro, adicionado novo valor