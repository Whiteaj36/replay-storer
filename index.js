const Discord = require("discord.js");
const fetch = require('node-fetch')
const fs = require('fs')
const client = new Discord.Client();


const getMatchApi = 'https://api.opendota.com/api/matches/'
const replayId = '5114579255'

client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", message => {
  if (message.content.startsWith("!replay")) {
    const messageContent = message.content.slice("!replay".length).split(/ +/);
    const replayId = messageContent.join(" ")
    const replayApiCall = `${getMatchApi}${replayId}`
    fetch(replayApiCall, { headers: { 'content-type': 'application/json; charset=UTF-8'}})
    .then((data) => {
      return data.json()
      .then((res) => {
        const replay_url = res.replay_url
        memUsedBefore = process.memoryUsage().heapUsed / 1024 / 1024;
        console.log(`Before: ${memUsedBefore}MB`)
        return fetch(replay_url)
        .then((res) => {
            const writeStream = fs.createWriteStream(`./${replayId}.dem.bz2`)
            res.body.pipe(writeStream)
      })
    })
  }
})
})
.catch(err => console.log('error', err))



client.login("MjEzODE2NTY2ODg4OTIzMTM3.XRPf1A.dJXHUxpIWSDUneJ6520EkHTKDMo");
