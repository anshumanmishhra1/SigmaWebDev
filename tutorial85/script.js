var slugify = require('slugify')

let a = slugify('some string') //some string
console.log(a)


//if you prefer something other '_' as sepearator
const b= slugify('some string', '_')
console.log(b)