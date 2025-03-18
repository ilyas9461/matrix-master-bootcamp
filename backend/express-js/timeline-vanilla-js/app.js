const express = require("express")
const app = express()
const router = require('./routes/routes.js')
app.use(router)

app.use(express.static('public'));

// Server
const APP_PORT=3000
const server=app.listen(APP_PORT, () => {
    let { address, port } = server.address()
    if (address === '::') {
        address = 'localhost'
    }
    console.log(`Server is listening at http://${address}:${port}`)
});