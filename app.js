const server = require('express')()

server.get('/hello', (req, res)=>{
    res.send(`Hello world ${Date.now()}\n`)
})

server.listen(3000, ()=>{
    console.log(`server is listening on port ${3000}`)
})