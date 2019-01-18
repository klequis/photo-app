import React from 'react'
import injectSheet from 'react-jss'
// import { green } from 'logger'

class ImageToolbar extends React.Component {

  deleteClick = () => {
    // green('deleteClick()')
    this.props.deleteImage(this.props.imageKey)
  }
  render () {
    const { classes } = this.props
    // green('ImageToolbar: props', this.props)
    return (
      <div className={classes.wrapper}>
        <button onClick={this.deleteClick}>D</button>
      </div>
    )
  }
}

const styles = theme => ({
  wrapper: {
    position: 'absolute',
    backgroundColor: 'white',
    width: 100,
    height: 25,
    top: 16,
    right: 16,
  },
})
export default injectSheet(styles)(ImageToolbar)