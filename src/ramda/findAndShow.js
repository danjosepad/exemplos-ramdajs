
const objectList = [
  { id: 1, console: 'playstation 4' },
  { id: 2, console: 'xbox one s' },
  { id: 2, console: 'xbox one s' },
  { id: 1, console: 'playstation 4' },
  { id: 1, console: 'playstation 4' },
  { id: 1, console: 'playstation 2' },
  { id: 3, console: 'playstation 1' }
]

let filteredByRepetition = []

const filteredByNoRepetition =
  objectList.reduce((acc, current) => {
    const isAlreadyIn = acc.find(
      obj => obj.id === current.id
    )

    if (isAlreadyIn) {
      filteredByRepetition.push(isAlreadyIn)
        return acc
    }

    return [...acc, current]
  }, [])


console.log({ filteredByNoRepetition, filteredByRepetition})
