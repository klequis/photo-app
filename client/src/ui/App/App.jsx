import React from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import EventForm from 'ui/EventForm'

// User

const App = (props) => {
  const { classes } = props

  return (
    <div id='App-wrapper' className={classes.wrapper}>
      <EventForm />
    </div>
  )
}

const styles = theme => ({
  fakeContent: {
    height: 400,
  },
  wrapper: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
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
  withStyles(styles),
)(App)
