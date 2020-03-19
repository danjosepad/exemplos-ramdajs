const R = require('ramda');

const bool = R.propEq('id', 2, {id: 2})
// Recebe: propriedade, valor, objeto

console.log(bool)
// Retorna um boolean se encontrou ou não no objeto