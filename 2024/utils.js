import { readFile } from 'node:fs/promises'

export async function parseData(day) {
  const filePath = new URL(`./Day${day}/data.txt`, import.meta.url)
  const data = await readFile(filePath, { encoding: 'utf-8' })
  return data
}