import React from 'react'

// User
import Images from 'ui/Images'
import ToolbarBottom from 'ui/ToolbarBottom'
import EventForm from 'ui/EventForm'

class App extends React.Component {
  render() {
    return (
      <div id='App-wrapper'>
        <ToolbarBottom />
        {/* <Breakpoints /> */}
        <Images />
      </div>
    )
  }
}

export default (App)
