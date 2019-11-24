import React from 'react'

function ReplayRow({ replay }) {
  return (
    <div
      style={{
        display: 'flex',
        'flex-direction': 'row',
        'align-items': 'center'
      }}
    >
      <div style={{ margin: '8px', width: '30%' }}>{replay.matchId}</div>
      <div style={{ margin: '8px', width: '35%' }}>{replay.submissionDate}</div>
      <div style={{ margin: '8px', width: '35%' }}>{replay.discordUser}</div>
    </div>
  )
}
export default ReplayRow
