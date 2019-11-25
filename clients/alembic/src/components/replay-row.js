import React from 'react'
import moment from 'moment'

function createS3Link(key) {
  return `https://dota-alchemy-replays.s3.us-east-2.amazonaws.com/${key}`
}

function ReplayRow({ replay }) {
  return (
    <div
      style={{
        display: 'flex',
        'flex-direction': 'row',
        'align-items': 'center'
      }}
    >
      <div style={{ margin: '8px', width: '30%' }}>
        <a style={{ color: '#ffffff' }} href={createS3Link(replay.key)}>
          {replay.key}
        </a>
      </div>
      <div style={{ margin: '8px', width: '35%' }}>
        {moment(replay.createdAt).format('MM/DD/YYYY')}
      </div>
      <div style={{ margin: '8px', width: '35%' }}>{replay.discordUser}</div>
    </div>
  )
}
export default ReplayRow
