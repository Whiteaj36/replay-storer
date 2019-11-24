import React from 'react'
import logo from './dota-alchemy.jpg'
import './App.css'
import Table from './components/table'

class App extends React.Component() {
  constructor(props) {
    super(props)
    this.state = { json: {} }
  }

  async componentDidMount() {
    const res = await fetch('localhost:3000/getReplays')
    const jsonResponse = await res.json()
    this.setState({ json: jsonResponse })
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <div>Replays</div>
          <div style={{ width: '100%' }}>
            <Table
              replays={[
                {
                  matchId: 4382203,
                  discordUser: 'Alex',
                  submissionDate: '1/2/2013'
                },
                {
                  matchId: 4832793,
                  discordUser: 'Donnie',
                  submissionDate: '4/20/2019'
                },
                {
                  matchId: 4918391,
                  discordUser: 'Jenkins',
                  submissionDate: '6/9/2018'
                }
              ]}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
