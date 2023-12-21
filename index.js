import { readFile } from 'node:fs/promises'
import { funcs } from "./2023/functions/functions.js"

const day = '1b'
const data = await parseData(`day${day[0]}.txt`)
console.log(funcs[`day${day}`](data))

async function parseData(file) {
  const filePath = new URL('./2023/data/' + file, import.meta.url)
  const data = await readFile(filePath, { encoding: 'utf-8' })
  return data
}