import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import Dropzone from 'react-dropzone'
import injectSheet from 'react-jss'
import iTrashcan from 'media/icons/trashcan.svg'

/* User */
import * as imageActions from 'store/actions/image-actions'
import * as uploadSelectors from 'store/selectors/image-selectors'
import ResponsiveImage from 'elements/ResponsiveImage'

// const dropZoneDefault = <ResponsiveImage
//   src='https://s3-us-west-2.amazonaws.com/photo-app-tvc/drag-or-browse.png' alt='drag and drop of click to browse'
//   />

const dropZoneDefault = <div style={{
  padding: 100, backgroundColor: 'green'
}}></div>

// const dropZoneReject = <ResponsiveImage
//   src='https://s3-us-west-2.amazonaws.com/tvc-events/media/drag-reject.png' alt='image rejected'
//   />

const dropZoneReject = <div style={{
  padding: 100, backgroundColor: 'red'
}}></div>

class UploadImage extends React.Component {
  constructor(props) {
    super(props)
    const initial = this.props.initial
    const uploadedImageUrl = this.props.uploadedImageUrl
    let imageUrl = ''
    if (typeof initial !== 'undefined') {
      imageUrl = initial
    } else if (!uploadedImageUrl === null) {
      imageUrl = uploadedImageUrl
    } else {
      imageUrl = ''
    }
    this.state = {
      accepted: [],
      rejected: [],
      // previewBlob: '',
      imageUrl: imageUrl,
    }
  }

  onDrop = async (accepted, rejected) => {

    this.setState({
      accepted,
      rejected,
    })
    let formData = new FormData()
    formData.append('upload', accepted[0])
    await this.props.imageUploadOneRequest(formData)
    this.setState({
      imageUrl: this.props.uploadedImageUrl
    })
    this.props.onChange(this.props.uploadedImageUrl)
  }
  removeImage = () => {
    this.setState({
      imageUrl: undefined
    })
    this.props.onChange('')
  }
  render() {
    const { classes, enableEdit } = this.props
    return (
      <div id='UploadImage-wrapper' className={classes.wrapper}>
        {
          this.state.imageUrl
            ? <div className={classes.imageDiv}>
                <ResponsiveImage
                  src={this.state.imageUrl}
                  alt='uploaded image'
                />
                {enableEdit
                  ? <button
                      mini
                      variant="fab"
                      color='secondary'
                      aria-label="Delete"
                      className={classes.fab}
                      onClick={this.removeImage}
                    >
                      <img src={iTrashcan} alt='delete' />
                    </button>
                  : null
                }

              </div>
            : <Dropzone
                style={style}
                acceptStyle={acceptStyle}
                rejectStyle={rejectStyle}
                accept="image/jpeg, image/png"
                onDrop={(accepted, rejected) => this.onDrop(accepted, rejected)}
              >
                {(props) => {
                  if (props.isDragActive) {
                    return props.isDragAccept ? dropZoneDefault : dropZoneReject
                  } else {
                    return dropZoneDefault
                  }
              }}
              </Dropzone>
        }
      </div>
    )
  }
}

const style = {
  // backgroundColor: 'transparent',
  backgroundColor: 'orange',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexFlow: 'column nowrap'
}

const acceptStyle = {
  backgroundColor: '#C8E6C9'
}

const rejectStyle = {
  backgroundColor: '#FFCDD2'
}

const styles = theme => ({
  media: {
    height: 140
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
    zIndex: '1',

  },
  imageDiv: {
    position: 'relative',
    zIndex: '0',
    backgroundColor: 'blue',
  },
  wrapper: {
    maxWidth: '100%',
    height: 'auto',
    alignItems: 'stretch',
    justifyContent: 'stretch',
    backgroundColor: 'green',
  },
})

const mapStateToProps = (state) => {
  return {
    imageUploadOneRequest: imageActions.imageUploadOneRequestKey,
    uploadedImageUrl: uploadSelectors.getUploadedImageUrl(state),
  }
}

export default compose(
  injectSheet(styles),
  connect(mapStateToProps, imageActions)
)(UploadImage)

UploadImage.propTypes = {
  classes: PropTypes.object.isRequired,
  initial: PropTypes.string,
  uploadedImageUrl: PropTypes.string,

}