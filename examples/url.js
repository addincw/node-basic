// const url = require('url')
const dummyUrl = new URL('http://my-website.com/home.html?status=200&message=success')

//full url
console.log(dummyUrl.href)

//get domain
console.log(dummyUrl.host)

//get hostname without port if exist
console.log(dummyUrl.hostname)

//get pathname
console.log(dummyUrl.pathname)

//get query
console.log(dummyUrl.search)

//get param as object
console.log(dummyUrl.searchParams)
//tambah param baru
console.log(dummyUrl.searchParams.append('data', ''))
console.log(dummyUrl.searchParams)
//loop searchParams
dummyUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))