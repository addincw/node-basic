const http = require('http')
const path = require('path')
const { readFile } = require('fs')

const PORT = process.env.PORT || 3000
const BASE_PATH = path.resolve('.')

//handle route
const server = http.createServer((request, response) => {
    let file = request.url === '/' ? 'index.html' : request.url
    let filePath = path.join(BASE_PATH, 'public', file)
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
                    path.join(BASE_PATH, 'public', '404.html'), 
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

server.listen(PORT, () => console.log(`server running in port :${PORT}`))