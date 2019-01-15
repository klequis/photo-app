import React from 'react'
import { withStyles } from '@material-ui/core/styles'

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
export default withStyles(styles)(ImageRow)