/** event emitter */
// const { EventEmitter } = require('events')
// const eventEmitter = new EventEmitter()

// //initialize event
// eventEmitter.on('greeting', function () {
//     console.log('hello world..')
// })

// //emit event
// eventEmitter.emit('greeting')

const { EventEmitter } = require('events')

class Logger extends EventEmitter
{
    startListen()
    {
        this.on('newLog', (data) => console.log(`new log data of: `, data))
    }
    log(data)
    {
        this.emit('newLog', data)
    }
}

const logger = new Logger()

logger.startListen()

logger.log({ name: 'addin', status: 'active'})