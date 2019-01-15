import React from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'

// User
import PrivateRoute from 'ui/auth/PrivateRoute'
import LoginForm from 'ui/auth/LoginForm'
import RegisterForm from 'ui/auth/RegisterForm'
import SettingsForm from 'ui/auth/SettingsForm'
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
    const { classes } = this.props
    const { numCols } = this.state
    return (
      <div id='App-wrapper' className={classes.wrapper}>
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

const styles = theme => ({
  wrapper: {
    // backgroundColor: 'red',
    // display: 'flex',
    // flexDirection: 'row',
    // width: '100%',
  },
  // contentWrapper: {
  //   flex: '1 0 auto',
  //   margin: 0,
  //   [theme.breakpoints.only('sm')]: {
  //     // margin: '0 5%',
  //   },
  //   [theme.breakpoints.only('md')]: {
  //     margin: '0 10%',
  //   },
  //   [theme.breakpoints.only('lg')]: {
  //     margin: '0 15%',
  //   },
  //   [theme.breakpoints.only('xl')]: {
  //     margin: '0 15%',
  //   },
  // },
  // content: {
  //   height: '100%',
  // },
  // footer: {
  //   backgroundColor: '#2b3137',
  //   flexShrink: 0,
  //   flexGrow: 0,
  // },
  // appbar: {
  //   paddingTop: 56,
  //   [theme.breakpoints.up('sm')]: {
  //     paddingTop: 64,
  //   },
  // },

})

export default compose(
  withStyles(styles),
)(App)
