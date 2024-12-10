import { parseData } from '../utils.js'

async function day4Prep() {
  const raw = await parseData(4)
  const arr = raw.split('\n').map((row) => row.split(''))
  return arr
}

export async function day4() {
  const game = await day4Prep()
  const checked = game.map((row, i) =>
    row.map((letter, idx) => {
      if (letter === 'X') return checkXmas([i, idx], game)
      else return 0
    })
  )
  const count = checked.flat().reduce((total, current) => current ? total + +current : total, 0)
  return count
}

export async function day4b() {}
function checkXmas(coords, game) {
  return [
    direction('nw', coords, game),
    direction('n', coords, game),
    direction('ne', coords, game),
    direction('w', coords, game),
    direction('e', coords, game),
    direction('sw', coords, game),
    direction('s', coords, game),
    direction('se', coords, game),
  ].filter(bool => bool).length
}

function direction(direction, startingCoords, game) {
  let coords = startingCoords
  
  coords = mutateCoords(direction, coords)
  try {
    if (game[coords[0]][coords[1]] !== 'M') {
      return false
    }
  } catch (e) {
    return false
  }

  coords = mutateCoords(direction, coords)
  try {
    if (game[coords[0]][coords[1]] !== 'A') {
      return false
    }
  } catch (e) {
    return false
  }

  coords = mutateCoords(direction, coords)
  try {
    if (game[coords[0]][coords[1]] !== 'S') {
      return false
    }
  } catch (e) {
    return false
  }
  
  return true
}

function mutateCoords(direction, coords) {
  return [
    ['nw', 'n', 'ne'].includes(direction)
      ? coords[0] - 1
      : ['sw', 's', 'se'].includes(direction)
      ? coords[0] + 1
      : coords[0], //row
    ['ne', 'e', 'se'].includes(direction)
      ? coords[1] + 1
      : ['nw', 'w', 'sw'].includes(direction)
      ? coords[1] - 1
      : coords[1], //col
  ]
}
