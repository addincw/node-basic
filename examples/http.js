const http = require('http')
const path = require('path')
const { readFile } = require('fs')

const HOSTNAME = '127.0.0.1'
const PORT = process.env.PORT || 3000

//simple
// const server = http.createServer(function(request, response) {
//     response.statusCode = 200
//     response.setHeader('Content-type', 'text/html')
//     response.end('Hello World')
// })

// server.listen(PORT, HOSTNAME, function() {
//     console.log('server run in port : ' + port)
// })

//load file
// readFile('../home.html', (err, html) => {
//     if(err) throw err;

//     const server = http.createServer(function(request, response) {
//         response.statusCode = 200
//         response.setHeader('Content-type', 'text/html')
//         response.end(html)
//     })

//     server.listen(PORT, HOSTNAME, function() {
//         console.log('server run in port : ' + port)
//     })
// })

//handle route
const basePath = path.resolve('.')
const server = http.createServer((request, response) => {
    let file = request.url === '/' ? 'index.html' : request.url
    let filePath = path.join(basePath, 'public', file)
    let fileExtension = path.extname(filePath)
    let contentType = 'text/html'

    switch (fileExtension) {
        case '.css':
            contentType = 'text/css'            
            break;
        case '.js':
            contentType = 'text/javascript'            
            break;
        case '.json':
            contentType = 'application/json'            
            break;
        case '.png':
            contentType = 'image/png'            
            break;
        case '.jpg':
            contentType = 'image/jpg'            
            break;
    }

    readFile(filePath, (err, content) => {
        if(err)
        {
            if(err.code == 'ENOENT') {
                readFile(
                    path.join(basePath, 'public', '404.html'), 
                    (err, content) => {
                        response.statusCode = 200
                        response.setHeader('Content-Type', 'text/html')
                        response.end(content)
                    }
                )
            } else {
                response.statusCode = 500
                response.end(`Server Error: ${err.code}`)
            }

            return
        }

        response.statusCode = 200
        response.setHeader('Content-Type', contentType)
        response.end(content)
    })
})

server.listen(PORT, HOSTNAME, () => console.log(`server running in http://${HOSTNAME}:${PORT}`))