'use strict'

const ENV = process.env.ENVIRONMENT || 'dev'
require('dotenv').config({ path: `./.env.${ENV}` })
const AWS = require('aws-sdk')

AWS.config.loadFromPath('./config.json')
const awsS3 = new AWS.S3()

const port = process.env.PORT || 3000
const express = require('express')
const cors = require('cors')
const { Upload } = require('../db/models')

const app = express()

app.use(cors())
app.get('/getReplays', (req, res) => {
  console.log('getReplays')
  return Upload.findAll({ raw: true }).then(uploads => {
    return res.send(uploads)
  })
})

app.delete('/deleteReplay/:id', (req, res) => {
  console.log('deleteReplay')
  const { id } = req.params
  return Upload.destroy({ where: { id }, returning: true }).then(upload => {
    awsS3.deleteObject(
      { Bucket: 'dota-alchemy-replays', Key: upload[0].key },
      (err, data) => {
        return res.status(204).send()
      }
    )
  })
})

app.get('/', (req, res) => {
  return res.status(200).send()
})

app.listen(port, () => console.log(`Alchemist Api listening on port ${port}!`))
