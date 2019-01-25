import React from 'react'
import injectSheet from 'react-jss'
import ButtonIcon from 'elements/ButtonIcon'

// import { green } from 'logger'

class ImageToolbar extends React.Component {

  deleteClick = () => {
    // green('deleteClick()')
    // this.props.deleteImage(this.props.imageKey)
  }
  render () {
    const { classes } = this.props
    // green('ImageToolbar: props', this.props)
    return (
      <div className={classes.wrapper}>
        <ButtonIcon type='delete' onClick={this.deleteClick} />
      </div>
    )
  }
}

const styles = theme => ({
  wrapper: {
    position: 'absolute',
    backgroundColor: 'transparent',
    width: 100,
    height: 25,
    top: 0,
    right: 0,
    borderRadius: '4%',
    zIndex: 99,
  },
  trashButton: {
    backgroundColor: 'transparent'
  },
  trashIcon: {
    color: 'white',
  },
})
export default injectSheet(styles)(ImageToolbar)