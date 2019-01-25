import React, { Component } from 'react'
import injectSheet from 'react-jss'
import Ink from 'react-ink'
import './App.css'

class App extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <button className={classes.circle}>
            <Ink />
            +
          </button>
        </header>
      </div>
    );
  }
}

const styles = {
  circle: {
    width: 10,
    height: 10,
    borderRadius: '50%',
    padding: 0,
    border: 0,
    outlineStyle: 'none',

    // not main properties
    fontSize: 6,
    position: 'relative',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'red',
  }
}

export default injectSheet(styles)(App)
