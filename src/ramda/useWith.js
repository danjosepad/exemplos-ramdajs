const R = require('ramda');

const result = R.converge(R.equals, [
  R.head,
  R.last
])([1, 2, 3, 4, 1])
// Verifica se o primeiro e o ultimo numero são iguais

console.log(result) // True


// Exemplo com reducer

let reducer = (state, action) => {
// Retirar o ultimo valor e colocar o payload
  const splittedArray = R.init(state) // Init pega todos menos o ultimo
  return R.append(action.payload, splittedArray)
}

// Refatorando com useWith

reducer = R.useWith(
  R.flip(R.append), // Muda ordem
  [
    R.init,
    R.prop('payload') // Pega o payload
  ]
)

const state = ['produto1', 'produto2', 'produto3']
const action = {
  payload: 'produto4'
}

const newState = reducer(state, action)
console.log(newState) // [ 'produto1', 'produto2', 'produto4' ]