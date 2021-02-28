require('dotenv').config()

const express = require('express');
const app = express();

const baseDir = `${__dirname}/build/`
app.use(express.static(`${baseDir}`))
app.get('/', (req, res) => res.sendfile('index.html', { root: baseDir }))
const port = parseInt(process.env.PORT, 3000) || 6000

app.listen(port)