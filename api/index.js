'use strict'

const ENV = process.env.ENVIRONMENT || 'dev'
require('dotenv').config({ path: `./.env.${ENV}` })

const port = process.env.PORT || 3000
const express = require('express')
const cors = require('cors')
const { Upload } = require('../db/models')

const app = express()

app.use(cors())
app.get('/getReplays', (req, res) => {
  return Upload.findAll({ raw: true }).then(uploads => {
    return res.send(uploads)
  })
})

app.get('/', (req, res) => {
  return res.status(200).send()
})

app.listen(port, () => console.log(`Alchemist Api listening on port ${port}!`))
