import React from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom'
import injectSheet from 'react-jss'
import { compose } from 'recompose'
// import EventForm from 'ui/EventForm'
import { green } from 'logger'
import Images from 'ui/Images'

const App = (props) => {
  const { classes, images } = props
  green('props', props)
  return (
    <div id='App-wrapper' className={classes.wrapper}>
      <Images images={images} />
      {/* <EventForm /> */}
    </div>
  )
}

const styles = theme => ({
  imgContainer: {
    width: '33.333333%'

  },
  img: {
    // width: 200,
    // margin: 5,
  },
  fakeContent: {
    height: 400,
  },
  wrapper: {

    // backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    height: '100vh',
    // backgroundColor: 'red',
  },
  contentWrapper: {
    flex: '1 0 auto',
    margin: 0,
    [theme.breakpoints.only('sm')]: {
      // margin: '0 5%',
    },
    [theme.breakpoints.only('md')]: {
      margin: '0 10%',
    },
    [theme.breakpoints.only('lg')]: {
      margin: '0 15%',
    },
    [theme.breakpoints.only('xl')]: {
      margin: '0 15%',
    },
  },
  content: {
    height: '100%',
  },
  footer: {
    backgroundColor: '#2b3137',
    flexShrink: 0,
    flexGrow: 0,
  },
  appbar: {
    paddingTop: 56,
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64,
    },

  },
})

export default compose(
  injectSheet(styles),
)(App)
