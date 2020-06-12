// load direct function name
// const { basename } = require('path')
// console.log(basename(__filename))

//load object
const path = require('path')

//base file name
console.log(path.basename(__filename))

//directory name
console.log(path.dirname(__filename))

//file extension
console.log(path.extname(__filename))

//get path object
console.log(path.parse(__filename))

//concatenate path
console.log(path.join(__dirname, 'sub-folder', 'file-in-sub-folder.html'))