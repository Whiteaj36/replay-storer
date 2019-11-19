'use strict'

const Discord = require('discord.js')
const AWS = require('aws-sdk')
const stream = require('stream')
const fetch = require('node-fetch')
const get = require('lodash.get')

const client = new Discord.Client()
const config = require('./config.json')
const { Upload } = require('./db/models')

const getMatchApi = 'https://api.opendota.com/api/matches/'

const awsS3 = new AWS.S3()

function uploadFromStream(s3, key) {
  const pass = new stream.PassThrough()

  const params = { Bucket: config.bucket, Key: key, Body: pass }
  s3.upload(params, function s3Response() {})

  return pass
}

client.on('message', message => {
  if (message.content.startsWith('!replay')) {
    const messageContent = message.content.slice('!replay'.length).split(/ +/)
    const discordUser = message.author.username
    const replayId = messageContent.join(' ')
    const replayApiCall = `${getMatchApi}${replayId}`
    fetch(replayApiCall, {
      headers: { 'content-type': 'application/json; charset=UTF-8' }
    }).then(data => {
      return data.json().then(openDotaJson => {
        const replayUrl = get(openDotaJson, 'replay_url')
        return fetch(replayUrl).then(res => {
          const key = `${replayId}.dem.bz2`
          res.body.pipe(uploadFromStream(awsS3, key))
          return Upload.create({ key, discordUser }).then(() => {
            message.react('👍')
          })
        })
      })
    })
  }
})

client.login(config.discordClientSecret)
