const R = require('ramda');

const array = [1, 2, 3, 4, 5]
const string = 'abcde'


//OBS: Toda vez que utilizados, criam um novo array (Conceito de imutabilidade)

// Remove os 3 primeiros arrays
console.log(R.drop(3, array)) // [ 4, 5 ]
console.log(R.drop(3, string)) // de

// Pega os 3 ultimos arrays
console.log(R.dropLast(3, array)) // [ 1, 2 ]
console.log(R.dropLast(3, string)) // ab

// Pega os 3 primeiros arrays
console.log(R.take(3, array)) // [ 1, 2, 3 ]
console.log(R.take(3, string)) // abc

// Pega os 3 ultimos arrays
console.log(R.takeLast(3, array)) // [ 3, 4, 5 ]
console.log(R.takeLast(3, string)) // cde

// Inicio do array
console.log(R.head(array)) // 1
console.log(R.head(string)) // a

// Final do array
console.log(R.last(array)) // 5
console.log(R.last(string)) // e

// Todos menos o ultimo
console.log(R.init(array)) // [ 1, 2, 3, 4 ]
console.log(R.init(string)) // abcd

// Todos menos o primeiro
console.log(R.tail(array)) // [ 2, 3, 4, 5 ]
console.log(R.tail(string)) // bcde