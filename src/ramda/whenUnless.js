const R = require('ramda');

let truncate = str => {
  let truncatedStr

  if(str.length > 10) {
    truncatedStr = str.substring(0, 10)
    truncatedStr = `${truncatedStr}...` // Concatena com reticencias
  } else {
    truncatedStr = str // Atribui o valor à variavel
  }

  return truncatedStr
}

// Com Ramda

truncate = R.when(
  str => str.length > 10,
  R.compose(
    R.concat(R.__, '...'),
    R.take(10)
  )
)

// Refatorando

truncate = R.when( // Quando o valor ultrapassa 10
  R.compose(
    R.gt(R.__, 10),
    R.prop('length')
  ),
  R.compose(
    R.concat(R.__, '...'),
    R.take(10)
  )
)

/*
truncate = R.unless(
  R.compose( // A não ser que o valor seja maior que 10, agora coloca ponto
    R.gt(R.__, 10),
    R.prop('length')
  ),
  R.compose(
    R.concat(R.__, '...'),
    R.take(10)
  )
)
*/

console.log(truncate('123456'))
console.log(truncate('12345678910'))