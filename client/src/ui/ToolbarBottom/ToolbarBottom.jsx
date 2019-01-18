import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
import { Link } from 'react-router-dom'
import {
  toolbarSetNumCols,
  toolbarSetMaxKeys,
} from 'store/actions/toolbar-actions'
import {
  getNumCols,
  getMaxKeys
} from 'store/selectors/toolbar-selectors'

import { green } from 'logger'

class ToolbarBottom extends React.Component {

  numColsChange = (e) => {
    const val = parseInt(e.target.value)
    const num = val <= 0 ? 1 : val
    this.props.toolbarSetNumCols(num)
  }

  maxKeysChange = (e) => {
    const val = parseInt(e.target.value)
    const num = val <= 0 ? 1 : val
    this.props.toolbarSetMaxKeys(num)
  }

  render() {
    const { classes, numCols, maxKeys } = this.props
    green('ToolbarBottom: maxKeys', maxKeys)
    return (
      <div className={classes.wrapper}>

        <input type='number' className={classes.numCols} value={numCols} onChange={this.numColsChange} />
        <div className={classes.maxKeys}>
          <input type='number' value={maxKeys} onChange={this.maxKeysChange} />
          <button>Refresh</button>
        </div>
        <Link to='/' className={classes.upload}>Home</Link>
        <Link to='/upload' className={classes.upload}>Upload</Link>
      </div>
    )
  }



}

const styles = theme => ({
  wrapper: {
    display: 'flex',
  },
  numCols: {
    marginRight: 30,
  },
  maxKeys: {
    marginRight: 30,
    // height: '100%',
  },
  upload: {
    color: 'white',
  },
})

const mstp = (state) => {
  return {
    numCols: getNumCols(state),
    maxKeys: getMaxKeys(state),
  }
}

const actions = {
  toolbarSetNumCols,
  toolbarSetMaxKeys,
}

export default compose(
  injectSheet(styles),
  connect(mstp, actions)
)(ToolbarBottom)