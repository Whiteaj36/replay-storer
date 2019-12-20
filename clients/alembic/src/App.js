import React from 'react'
import logo from './dota-alchemy.jpg'
import './App.css'
import Table from './components/table'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { replays: [] }
  }

  async componentDidMount() {
    const res = await fetch('https://api.alchemistsproject.com/getReplays')
    const jsonResponse = await res.json()
    this.setState({ replays: jsonResponse })
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <div>Replays</div>
          <div style={{ width: '100%' }}>
            <Table replays={this.state.replays} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
