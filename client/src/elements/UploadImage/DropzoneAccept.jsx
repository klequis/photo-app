import React from 'react'
import injectSheet from 'react-jss'
import iUpload from 'media/icons/cloud-upload-light.svg'

const DropzoneAccept = ({ classes }) => {
  return (
    <div  className={classes.wrapper}>
      <img src={iUpload} alt='upload' />
      <div>Drag here</div>
    </div>
  )
}

const styles = theme => ({
  wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: 'green',
  }
})
export default injectSheet(styles)(DropzoneAccept)

