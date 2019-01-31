import React from 'react'
import injectSheet from 'react-jss'

const DropzoneReject = ({ classes }) => {
  return (
    <div className={classes.wrapper}></div>
  )
}

const styles = theme => ({
  wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red'
  }
})
export default injectSheet(styles)(DropzoneReject)