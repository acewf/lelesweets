const express = require('express')
const app = express();
var path = require('path');
var public = path.join(__dirname, 'public');
const port = process.env.VIRTUAL_PORT || 3000;

app.use(express.static(public))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))