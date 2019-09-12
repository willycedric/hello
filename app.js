const server = require('express')()
const { getHostName } = require('./helper')

server.get('/hello', (req, res)=>{
    res.send(`Hello world ${Date.now()}\n`)
})

server.get('/host', (req, res)=>{

    getHostName((data)=>{
        res.send(`${data}\n`)
    })
})


server.listen(3000, ()=>{
    console.log(`server is listening on port ${3000}`)
})