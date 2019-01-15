import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { green } from 'logger'

const ToolbarBottom = (props) => {


    const { classes, numCols, numColsChange } = props

    return (
      <div className={classes.wrapper}>
        <input type='number' value={numCols} onChange={numColsChange} />
      </div>
    )
}

const styles = theme => ({
  wrapper: {
    display: 'flex',
  }
})

export default withStyles(styles)(ToolbarBottom)