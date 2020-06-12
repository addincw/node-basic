/** read file */
// const { readFile, readFileSync } = require('fs')

// syncrounous
// const txt = readFileSync('./note.txt', 'utf-8')
// console.log(txt)

// asyncronous
// readFile('./note.txt', 'utf-8', function (err, txt) {
//     console.log(txt)
// })

//async await / promises
// const { readFile } = require('fs').promises

// async function readNote()
// {
//     let txt = await readFile('./note.txt', 'utf-8')
//     return txt
// }
// console.log(readNote())