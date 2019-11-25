'use strict'

const express = require('express')
const cors = require('cors')
const { Upload } = require('../db/models')

const app = express()

const port = 3000
app.use(cors())

app.get('/getReplays', (req, res) => {
  console.log(Upload)
  Upload.findAll({ raw: true }).then(uploads => {
    return res.send(uploads)
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
