// load custom modul
// const object = require('./module-object')
// console.log(object.title)

//load class modul
const MyClass = require('./module-class')
const newClass = new MyClass('demo')

newClass.getInfo()