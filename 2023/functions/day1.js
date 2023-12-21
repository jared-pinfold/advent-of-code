function day1(data) {
  // const data = await parseData(file) //parse file into a string

  return data
    .split('\n') // split string into individual lines
    .map((s) => {
      const nums = s.replaceAll(/[a-z]/g, '') //remove letters from each line
      return Number(nums[0] + nums[nums.length - 1]) // get first and last digits from each line and convert to a number
    })
    .reduce((a, c) => a + c, 0) // calculate sum of all numbers
}

function day1b(data) {
  // const data = await parseData(file) //parse file into a string
  const nums = data
    .split('\n') // split string into individual lines
    .map((string) => {
      const letters = string.split('')
      let first = letters.reduce((a, c, i) => {
        if (a) return a //if the loop has already found the number, keep returning that
        if (/[1-9]/.test(c)) return c //if the current character is a numeral, return that
        if (c === 'o' && string.substring(i, i + 3) === 'one') return '1' //if it's a letter, test if it's the start of the word version of the number
        if (c === 't' && string.substring(i, i + 3) === 'two') return '2'
        if (c === 't' && string.substring(i, i + 5) === 'three') return '3'
        if (c === 'f' && string.substring(i, i + 4) === 'four') return '4'
        if (c === 'f' && string.substring(i, i + 4) === 'five') return '5'
        if (c === 's' && string.substring(i, i + 3) === 'six') return '6'
        if (c === 's' && string.substring(i, i + 5) === 'seven') return '7'
        if (c === 'e' && string.substring(i, i + 5) === 'eight') return '8'
        if (c === 'n' && string.substring(i, i + 4) === 'nine') return '9'
      }, null)

      let last = letters.reduceRight((a, c, i) => {
        if (a) return a
        if (/[1-9]/.test(c)) return c
        if (c === 'e' && string.substring(i - 2, i + 1) === 'one') return '1'
        if (c === 'o' && string.substring(i - 2, i + 1) === 'two') return '2'
        if (c === 'e' && string.substring(i - 4, i + 1) === 'three') return '3'
        if (c === 'r' && string.substring(i - 3, i + 1) === 'four') return '4'
        if (c === 'e' && string.substring(i - 3, i + 1) === 'five') return '5'
        if (c === 'x' && string.substring(i - 2, i + 1) === 'six') return '6'
        if (c === 'n' && string.substring(i - 4, i + 1) === 'seven') return '7'
        if (c === 't' && string.substring(i - 4, i + 1) === 'eight') return '8'
        if (c === 'e' && string.substring(i - 3, i + 1) === 'nine') return '9'
      }, null)
      return Number(first + last)
    })
  return nums.reduce((a, c) => a + c, 0) // calculate sum of all numbers
}

export {
  day1,
  day1b,
}
