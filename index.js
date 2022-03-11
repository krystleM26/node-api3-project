// require your server and launch it
const server = require('./api/server')
const port = 9090

server.listen(port, () => {
    console.log(` Server is listnening of ${port}`)
})