import { readFile } from 'node:fs/promises'

async function parseData(file){
  const filePath = new URL('./data/' + file, import.meta.url)
  const data = await readFile(filePath, { encoding: 'utf-8' })
  return data
}

export async function day1(file) {
  const filePath = new URL('./data/' + file, import.meta.url)
  const data = await readFile(filePath, { encoding: 'utf-8' })

  return Math.max(
    ...data
      .split('\n\n')
      .map((arr) => arr.split('\n').map(Number))
      .map((arr) => arr.reduce((a, c) => a + c, 0))
  )
}

export async function day2(file) {
  const data = await parseData(file)

  const sorted =  data
      .split('\n\n')
      .map((arr) => arr.split('\n').map(Number))
      .map((arr) => arr.reduce((a, c) => a + c, 0))
      .sort((a, b) => b-a)

  return sorted[0] + sorted[1] + sorted[2]
}