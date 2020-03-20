const R = require('ramda');

const toSlug = R.compose(
  encodeURIComponent,
  R.join('-'),
  R.tap(console.log), // Retorna o objeto manipulado durante o processo
  R.map(word => {
    console.log('word', word)
    return R.toLower(word)
  }),
  R.split(' ')
)

const slug = toSlug('This is composition')
console.log('slug', slug)
// slug this-is-composition