const R = require('ramda');

const unsorted = [1, 3, 5, 2, 7]
let asc = R.sort((a, b) => a - b)

console.log(asc(unsorted)) // [ 1, 2, 3, 5, 7 ]
// Organiza o array em ordem crescente

let desc = R.sort((a, b) => b - a)
console.log(desc(unsorted)) // [ 7, 5, 3, 2, 1 ]
// Organiza o array em ordem decrescente

// Refatorando

asc = R.sort(R.ascend(R.identity))
desc = R.sort(R.descend(R.identity))

console.log('ascend', asc(unsorted)) // ascend [ 1, 2, 3, 5, 7 ]
console.log('descend', desc(unsorted)) // descend [ 7, 5, 3, 2, 1 ]

const users = [
  {
    id: 1,
    name: 'Daniel'
  },
  {
    id: 3,
    name: 'Brunno'
  },
  {
    id: 2,
    name: 'Ramon'
  }
]

const ascById = R.sort(R.ascend(R.prop('id')))
const descById = R.sort(R.descend(R.prop('id')))

console.log(ascById(users))
/*
[
  { id: 1, name: 'Daniel' },
  { id: 2, name: 'Ramon' },
  { id: 3, name: 'Brunno' }
]
*/

console.log(descById(users))
/*
[
  { id: 3, name: 'Brunno' },
  { id: 2, name: 'Ramon' },
  { id: 1, name: 'Daniel' }
]
*/

// O problema maior é que: Se tiver letras maiusculas e minusculas busca as maiusculas
// Para isso: 

const sortWithLower = R.sortBy(R.compose(
  R.toLower,
  R.prop('name')
))

console.log(sortWithLower(users))

/*
[
  { id: 3, name: 'Brunno' },
  { id: 1, name: 'Daniel' },
  { id: 2, name: 'Ramon' }
]
*/

// Usando sortWith 

const idName = R.sortWith([
  R.descend(R.prop('name')),
  R.ascend(R.prop('id'))
])

console.log(idName(users));
/*
[
  { id: 2, name: 'Ramon' },
  { id: 1, name: 'Daniel' },
  { id: 3, name: 'Brunno' }
]
*/