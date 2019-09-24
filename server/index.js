const express = require('express')
const app = express()
const port = process.env.VIRTUAL_PORT || 3000;

app.get('/', (req, res) => res.send(`Welcome to LeleSweets at ${req.hostname}!`))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))