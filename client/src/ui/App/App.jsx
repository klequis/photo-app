import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router-dom'
import injectSheet from 'react-jss'

// User
import Images from 'ui/Images'
// import ToolbarBottom from 'ui/ToolbarBottom'
import EventForm from 'ui/EventForm'
import { green } from 'logger'

class App extends React.Component {
  render() {
    // green('App.render')
    const { classes } = this.props
    return (
      <Router>
        <main id='App-wrapper-main' className={classes.wrapper}>
            {/* <ToolbarBottom /> */}
            {/* <Breakpoints /> */}
            <Route exact path='/' component={Images} />
            <Route exact path='/upload' component={EventForm} />
        </main>

      </Router>
    )
  }
}

const styles = {
  wrapper: {
    backgroundColor: 'green',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    // flexGrow: 0,
    // flexShrink: 0,
  },
}

export default injectSheet(styles)(App)
