import React from 'react'
import injectSheet from 'react-jss'

// User
import UploadImage from 'elements/UploadImage'
import ImagesList from 'ui/ImagesList'

class App extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <main id='App-wrapper-main' className={classes.wrapper}>
        <UploadImage />
        <ImagesList />
      </main>
    )
  }
}

const styles = theme => ({
  wrapper: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.dark,
    padding: '0 3%'
  },
})

export default injectSheet(styles)(App)
