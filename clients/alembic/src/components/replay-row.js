import React from 'react'
import moment from 'moment'

function ReplayRow({ replay }) {
  return (
    <div
      style={{
        display: 'flex',
        'flex-direction': 'row',
        'align-items': 'center'
      }}
    >
      <div style={{ margin: '8px', width: '30%' }}>{replay.key}</div>
      <div style={{ margin: '8px', width: '35%' }}>
        {moment(replay.createdAt).format('MM/DD/YYYY')}
      </div>
      <div style={{ margin: '8px', width: '35%' }}>{replay.discordUser}</div>
    </div>
  )
}
export default ReplayRow
