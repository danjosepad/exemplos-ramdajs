const user = {
  name: "Daniel",
  age: 21
}

function config(data) {
  data.age = 19
  data.name = "Mutable user"
  return data
}

const userConfigured = config(user);

console.log(userConfigured);
console.log(user);


console.log('---------------------------------')
// O dado foi alterado, pois os arrays e objetos são passados por referencia
// Ou seja, uma alteração reflete no objeto inicial
// Para corrigir isso, utiliza-se: 

const newUser = {
  name: "Carlos",
  age: 25
}

function newConfig(data) {
  return Object.assign({}, data, {age: 23})
  // Dessa forma, se cria um novo objeto vazio, que recebe o anterior
  // E recebe um novo valor para o objeto criado
}

const newUserConfigured = newConfig(newUser)

console.log(newUserConfigured)
console.log(newUser)