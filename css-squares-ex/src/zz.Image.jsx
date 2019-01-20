import React from 'react'
import injectSheet from 'react-jss'
import { compose } from 'recompose'

class Image extends React.Component {
  render() {
    const { classes, name } = this.props

    return (
      <div className={classes.box}>
        <div className={classes.inner}>One</div>
      </div>
    )
  }
}

const styles = {
  box: {
    background: 'tomato',
    margin: 5,
    color: 'white',
    fontWeight: 'bold',
    flex: '1 0 auto',
    position: 'relative',
    '&:after': {
      content: " ",
      float: 'left',
      display: 'block',
      paddingTop: '100%',
    },
  },
  inner: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}


export default compose(
  injectSheet(styles),
)(Image)