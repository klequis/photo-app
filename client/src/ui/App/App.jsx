import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router-dom'
import injectSheet from 'react-jss'

// User
import Images from 'ui/Images'
import ToolbarBottom from 'ui/ToolbarBottom'
import EventForm from 'ui/EventForm'
import { green } from 'logger'

class App extends React.Component {
  render() {
    // green('App.render')
    const { classes } = this.props
    return (
      <Router>
        <main id='App-wrapper-main' className={classes.wrapper}>
            <ToolbarBottom />
            {/* <Breakpoints /> */}
            <Route exact path='/' component={Images} />
            <Route exact path='/upload' component={EventForm} />
        </main>

      </Router>
    )
  }
}

const styles = theme => ({
  wrapper: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    // padding: 4,
    backgroundColor: theme.palette.background.dark
  },
})

export default injectSheet(styles)(App)
