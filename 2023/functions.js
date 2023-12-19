import { readFile } from 'node:fs/promises'

async function parseData(file) {
  const filePath = new URL('./data/' + file, import.meta.url)
  const data = await readFile(filePath, { encoding: 'utf-8' })
  return data
}

async function day1b(file) {
  const data = await parseData(file) //parse file into a string
  const nums = data
    .split('\n') // split string into individual lines
    .map((s) => {
      const letters = s.split('')
      let first = letters.reduce((a, c, i) => {
        if (a) return a
        if ([1, 2, 3, 4, 5, 6, 7, 8, 9].includes(Number(c))) return Number(c)
        if (
          c === 'o' &&
          letters[i + 1] === 'n' &&
          letters[i + 2] === 'e' &&
          letters.length >= i + 2
        )
          return 1
        if (
          c === 't' &&
          letters[i + 1] === 'w' &&
          letters[i + 2] === 'o' &&
          letters.length >= i + 2
        )
          return 2
        if (
          c === 't' &&
          letters[i + 1] === 'h' &&
          letters[i + 2] === 'r' &&
          letters[i + 3] === 'e' &&
          letters[i + 4] === 'e' &&
          letters.length >= i + 4
        )
          return 3
        if (
          c === 'f' &&
          letters[i + 1] === 'o' &&
          letters[i + 2] === 'u' &&
          letters[i + 3] === 'r' &&
          letters.length >= i + 3
        )
          return 4
        if (
          c === 'f' &&
          letters[i + 1] === 'i' &&
          letters[i + 2] === 'v' &&
          letters[i + 3] === 'e' &&
          letters.length >= i + 3
        )
          return 5
        if (
          c === 's' &&
          letters[i + 1] === 'i' &&
          letters[i + 2] === 'x' &&
          letters.length >= i + 2
        )
          return 6
        if (
          c === 's' &&
          letters[i + 1] === 'e' &&
          letters[i + 2] === 'v' &&
          letters[i + 3] === 'e' &&
          letters[i + 4] === 'n' &&
          letters.length >= i + 4
        )
          return 7
        if (
          c === 'e' &&
          letters[i + 1] === 'i' &&
          letters[i + 2] === 'g' &&
          letters[i + 3] === 'h' &&
          letters[i + 4] === 't' &&
          letters.length >= i + 4
        )
          return 8
        if (
          c === 'n' &&
          letters[i + 1] === 'i' &&
          letters[i + 2] === 'n' &&
          letters[i + 3] === 'e' &&
          letters.length >= i + 3
        )
          return 9
      }, null)
      let last = letters.reduceRight((a, c, i) => {
        if (a) return a
        if ([1, 2, 3, 4, 5, 6, 7, 8, 9].includes(Number(c))) return Number(c)
        if (c === 'e' && letters[i - 1] === 'n' && letters[i - 2] === 'o')
          return 1
        if (c === 'o' && letters[i - 1] === 'w' && letters[i - 2] === 't')
          return 2
        if (
          c === 'e' &&
          letters[i - 1] === 'e' &&
          letters[i - 2] === 'r' &&
          letters[i - 3] === 'h' &&
          letters[i - 4] === 't'
        )
          return 3
        if (
          c === 'r' &&
          letters[i - 1] === 'u' &&
          letters[i - 2] === 'o' &&
          letters[i - 3] === 'f'
        )
          return 4
        if (
          c === 'e' &&
          letters[i - 1] === 'v' &&
          letters[i - 2] === 'i' &&
          letters[i - 3] === 'f'
        )
          return 5
        if (c === 'x' && letters[i - 1] === 'i' && letters[i - 2] === 's')
          return 6
        if (
          c === 'n' &&
          letters[i - 1] === 'e' &&
          letters[i - 2] === 'v' &&
          letters[i - 3] === 'e' &&
          letters[i - 4] === 's'
        )
          return 7
        if (
          c === 't' &&
          letters[i - 1] === 'h' &&
          letters[i - 2] === 'g' &&
          letters[i - 3] === 'i' &&
          letters[i - 4] === 'e'
        )
          return 8
        if (
          c === 'e' &&
          letters[i - 1] === 'n' &&
          letters[i - 2] === 'i' &&
          letters[i - 3] === 'n'
        )
          return 9
      }, null)
      const joined = '' + first + last
      return Number(joined)
    })
  console.table(nums)
  return nums.reduce((a, c) => a + c, 0) // calculate sum of all numbers
}

async function day1(file) {
  const data = await parseData(file) //parse file into a string

  return data
    .split('\n') // split string into individual lines
    .map((s) => {
      const nums = s.replaceAll(/[a-z]/g, '') //remove letters from each line
      return Number(nums[0] + nums[nums.length - 1]) // get first and last digits from each line and convert to a number
    })
    .reduce((a, c) => a + c, 0) // calculate sum of all numbers
}

export const funcs = {
  day1,
  day1b,
}
