import { funcs } from "./functions.js"

const day = '1b'

console.log(await funcs[`day${day}`](`day${day[0]}.txt`))