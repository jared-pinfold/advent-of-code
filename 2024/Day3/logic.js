import { parseData } from '../utils.js'

async function day3Prep() {
  return await parseData(3)
}

export async function day3() {
  const string = await day3Prep()
  const commands = string.match(/(mul\(\d{1,3},\d{1,3}\))/g)
  const pairsToMultiply = commands.map((command) => command.match(/(\d{1,3})/g))
  return pairsToMultiply.reduce((total, pair) => total + +pair[0] * +pair[1], 0)
}

export async function day3b() {
  const string = await day3Prep()
  const commands = string.match(
    /(do\(\))|(don't\(\))|(mul\(\d{1,3},\d{1,3}\))/g
  )
  return commands.reduce(
    (obj, command) => {
      if (command === 'do()') return { ...obj, do: true }
      if (command === "don't()") return { ...obj, do: false }
      if (obj.do) {
        const pair = command.match(/(\d{1,3})/g)
        return {
          ...obj,
          total: obj.total + +pair[0] * +pair[1],
        }
      } else return obj
    },
    { total: 0, do: true }
  )
}
