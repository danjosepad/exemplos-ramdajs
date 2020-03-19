const R = require('ramda');

const products = [
  {
    name: 'Jacket',
    price: 50,
    category: 'clothes',
    count: 30
  },
  {
    name: 'Boots',
    price: 120,
    category: 'clothes',
    count: 30
  },
  {
    name: 'iPhone',
    price: 600,
    category: 'electronics',
    count: 5
  },
  {
    name: 'iPad',
    price: 300,
    category: 'electronics',
    count: 10
  }
]

let getProductNames = items => {
  const filteredItems = items.filter(item =>
    item.category === 'clothes' && item.count < 50 &&
    item.price < 100)

  return filteredItems.map(item => item.name)
}

// Com Ramda

getProductNames = R.compose(
  R.pluck('name'),
  R.filter(R.where({
    category: R.equals('clothes'),
    count: R.lt(R.__, 50),
    price: R.lt(R.__, 100)
  }))
)

console.log(getProductNames(products)) // [ 'Jacket' ]