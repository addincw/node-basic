//basic using express
const express = require('express')
// const { readFile } = require('fs')
const { readFile } = require('fs').promises

const app = express()

// sync way
// app.get('/', function(request, response) {
//     readFile('./home.html', 'utf-8', function(err, html) {
//         if(err) response.status(500).send('sorry, out of order') 
//         response.send(html)
//     })
// })

// aysnc way
app.get('/', async function(request, response) {
    response.send( await readFile('../public/index.html', 'utf-8') )
})

app.listen(process.env.PORT || 3000, () => console.log('web available on http://localhost:3000'))