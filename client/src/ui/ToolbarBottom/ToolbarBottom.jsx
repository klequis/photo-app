import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
import ButtonLink from 'elements/ButtonLink'
import {
  toolbarSetNumCols,
  toolbarSetMaxKeys,
} from 'store/actions/toolbar-actions'
import {
  getNumCols,
  getMaxKeys
} from 'store/selectors/toolbar-selectors'
import Input from 'elements/Input'
import ControlLabel from 'elements/ControlLabel'
import Button from 'elements/Button'


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
    // green('ToolbarBottom: maxKeys', maxKeys)
    return (
      <div className={classes.wrapper}>
        <div className={classes.actions}>
          <ControlLabel>Columns:</ControlLabel>
          <Input
            className={classes.numCols}
            onChange={this.numColsChange}
            type='number'
            value={numCols}
          />
          <ControlLabel>Images:</ControlLabel>
          <Input
            className={classes.maxKeys}
            onChange={this.maxKeysChange}
            type='number'
            value={maxKeys}
          />
          <Button className={classes.maxKeysRefresh}>Refresh</Button>
        </div>
        <nav className={classes.nav}>
          <ButtonLink to='/' className={classes.upload}>Home</ButtonLink>
          <ButtonLink to='/upload' className={classes.upload}>Upload</ButtonLink>
        </nav>
      </div>
    )
  }



}

const styles = theme => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: '5px 10px',
    justifyContent: 'space-between'
    // backgroundColor: 'red',
  },
  actions: {
    display: 'flex',
  },
  nav: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  numCols: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 30,
    width: 50,
  },
  maxKeys: {
    // marginRight: 5,
    width: 50,
  },
  maxKeysRefresh: {
    marginRight: 30,
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
