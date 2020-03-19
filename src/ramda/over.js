const R = require('ramda');

const user = {
  name: 'John',
  surname: 'Flint'
}

let nameLens = R.lens(
  R.prop('name'),
  R.assoc('name')
)

// Refatorando 

nameLens = R.lensProp('name')

/*
const result = R.set(nameLens, 'Daniel', user)
// Parametro, valor, objeto

console.log('user', user) // Não foi alterado
console.log('result', result)
*/

// Refatorando 

const result = R.over(nameLens, R.toUpper, user) // Sobreescreve
console.log(result)