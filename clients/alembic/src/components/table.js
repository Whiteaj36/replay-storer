import React from 'react'
import ReplayRow from './replay-row'

function Table({ replays }) {
  return (
    <div style={{ width: '100%', 'text-align': 'center' }}>
      <div style={{ display: 'flex', 'flex-direction': 'row' }}>
        <div style={{ margin: '8px', width: '30%' }}>Match ID</div>
        <div style={{ margin: '8px', width: '35%' }}>Submission Date</div>
        <div style={{ margin: '8px', width: '35%' }}>Submitter</div>
      </div>
      {replays.map(replay => (
        <ReplayRow replay={replay} />
      ))}
    </div>
  )
}
export default Table
