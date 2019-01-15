import React from 'react'
import injectSheet from 'react-jss'
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

export default injectSheet(styles)(ToolbarBottom)