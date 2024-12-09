import { parseData } from '../utils.js'

async function day2Prep() {
  const rawData = await parseData(2)
  const array = rawData.split('\n')
  const reports = array.map((str) => str.split(' ').map((s) => +s))
  return reports
}

export async function day2() {
  const data = await day2Prep()
  const safety = data.map((report) =>
    report.reduce(
      (a, c) => {
        if (a.safe === false) return { safe: false } //already unsafe
        if (a.lastNum === null)
          return { safe: true, lastNum: c, direction: null } // first number so nothing to compare
        if (Math.abs(a.lastNum - c) < 1 || Math.abs(a.lastNum - c) > 3)
          return { safe: false } // diff was too big or small
        if (a.direction === null)
          return {
            ...a,
            lastNum: c,
            direction: a.lastNum > c ? 'descending' : 'ascending',
          } // figure out the direction
        if (a.direction === 'ascending' && c < a.lastNum) return { safe: false } // wrong direction
        if (a.direction === 'descending' && c > a.lastNum)
          return { safe: false } // wrong direction
        return { ...a, lastNum: c } //nothing went wrong
      },
      {
        safe: null,
        direction: null,
        lastNum: null,
      }
    )
  )
  return safety.reduce((a, c) => (c.safe ? a + 1 : a), 0)
}