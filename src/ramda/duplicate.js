const R = require('ramda');

const renameKeys = R.curry((keysMap, obj) =>
  R.reduce((acc, key) => R.assoc(keysMap[key] || key, obj[key], acc), {}, R.keys(obj))
);
const input = { firstName: 'Elisia', age: 22, type: 'human' }

const test = renameKeys({ firstName: 'name', type: 'kind', foo: 'bar' })(input)
//=> { name: 'Elisia', age: 22, kind: 'human' }
console.log(test);