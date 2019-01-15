import React from 'react'

// User
import Images from 'ui/Images'
import ToolbarBottom from 'ui/ToolbarBottom'

class App extends React.Component {
  state = {
    numCols: 3
  }

  numColsChange = (e) => {
    const val = parseInt(e.target.value)
    const num = val <= 0 ? 1 : val
    this.setState({
      numCols: num
    })
  }

  render() {
    const { numCols } = this.state
    return (
      <div id='App-wrapper'>
        <ToolbarBottom
          numCols={numCols}
          numColsChange={this.numColsChange}
        />
        {/* <Breakpoints /> */}
        <Images numCols={numCols}/>

      </div>
    )
  }
}

export default (App)
