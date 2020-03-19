const R = require('ramda');

const students = [
  {
    name: 'Daniel',
    score: 8,
    isActive: true
  },
  {
    name: 'Brunno',
    score: 65,
    isActive: false
  },
  {
    name: 'Ramon',
    score: 46,
    isActive: true
  }
]

const byScore = R.groupBy(student => 
  student.score > 50 ? 'positive' : 'negative'  
)

console.log(byScore(students))
// Gerencia entre 2 arrays, os negativos, e os positivos

/*
{
  negative: [ { name: 'Daniel', score: 8 }, { name: 'Ramon', score: 46 } ],
  positive: [ { name: 'Brunno', score: 65 } ]
}
*/

const ByActivity = R.groupBy(R.prop('isActive'))

console.log('group by activity', ByActivity(students))

/*
group by activity {
  true: [
    { name: 'Daniel', score: 8, isActive: true },
    { name: 'Ramon', score: 46, isActive: true }
  ],
  false: [ { name: 'Brunno', score: 65, isActive: false } ]
}
*/