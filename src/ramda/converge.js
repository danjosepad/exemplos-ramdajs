const R = require('ramda');

const isValidArray = [6, 3, 4, 5, 2]
const isInvalidArray = [3, 4, 6, 1]

let isFirstElementBiggest = elements =>
  elements[0] === elements.sort((a, b) => b - a)[0]

// Usando Ramda

isFirstElementBiggest = R.converge(R.equals, [
  R.head, // Primeiro array
  elements => R.head(R.sort(R.descend(R.identity))(elements))
])

// Refatorando
const sortByBiggestFirst = R.sort(R.descend(R.identity))

isFirstElementBiggest = R.converge(R.equals, [
  R.head,
  R.compose(
    R.head,
    sortByBiggestFirst
  )
])

console.log(isFirstElementBiggest(isValidArray))
console.log(isFirstElementBiggest(isInvalidArray))