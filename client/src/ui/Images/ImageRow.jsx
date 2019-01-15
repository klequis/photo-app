import React from 'react'
import injectSheet from 'react-jss'

const ImageRow = ({ classes, children }) => {
  return (
    <div className={classes.wrapper}>
      {children}
    </div>
  )
}

const styles = theme => ({
  wrapper: {
    display: 'flex',
  }
})
export default injectSheet(styles)(ImageRow)