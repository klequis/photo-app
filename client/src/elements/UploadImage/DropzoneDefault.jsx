import React from 'react'
import injectSheet from 'react-jss'
import iUpload from 'media/icons/cloud-upload-light.svg'

const DropzoneDefault = ({ classes }) => {
  return (
    <div  className={classes.wrapper}>
      <img src={iUpload} alt='upload' />
      <div>Drag file here</div>
      <div>Or click to browse</div>
    </div>
  )
}

const styles = theme => ({
  wrapper: {
    backgroundColor: 'grey',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
export default injectSheet(styles)(DropzoneDefault)

