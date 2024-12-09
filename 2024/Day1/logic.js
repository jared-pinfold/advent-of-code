import { readFile } from 'node:fs/promises'
import { parseData } from '../utils.js'

async function day1Prep() {
  const rawData = await parseData(1)
  const array = rawData.split('\n').map((str) => str.split('   '))
  const [left, right] = array.reduce(
    (a, c) => [
      [...a[0], +c[0]], 
      [...a[1], +c[1]]
    ],
    [[], []]
  )
  left.sort((a, b) => a - b)
  right.sort((a, b) => a - b)
  return [left, right]
}

export async function day1(){
  const [left, right] = await day1Prep()
  return answer = left.reduce((a, c, i) => {
    return a + Math.abs(c - right[i])
  }, 0)
}

export async function day1b(){
  const [left, right] = await day1Prep()
  const countObj = right.reduce((a, c) => {
    return {
      ...a,
      [c]: (a[c] || 0) + 1
    }
  }, {})
  return left.reduce((a,c) => a + (c * (countObj[c] || 0)), 0)
}