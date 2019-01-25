import React from 'react'
import injectSheet from 'react-jss'
import Button from 'ui/Button'
import { green } from 'logger'

const App = ({ classes }) => {
  return (
    <div className={classes.wrapper}>
      <main className={classes.main}>
        <Button>Refresh</Button>
      </main>
    </div>
  )
}

const styles = theme => ({
  main: {
    width: '50%',
    height: '30%',
    border: '1px solid #3d3d3d',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // padding: 4,
    backgroundColor: theme.palette.background.dark,
    paddingTop: '5%',
  },
})

export default injectSheet(styles)(App)
