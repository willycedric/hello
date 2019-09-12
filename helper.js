const { spawn } = require('child_process')


const getHostName = (callback)=>{
    spawn('hostname').stdout.on('data', (data)=>{
        console.log(data.toString('utf-8'))
        callback(data.toString('utf-8'))
    })
}

module.exports = {
    getHostName
}