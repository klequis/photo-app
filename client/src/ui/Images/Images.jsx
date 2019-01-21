import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
import {
  imagesDeleteOneRequestKey,
  imagesDeleteOneRequest,
} from 'store/actions/image-actions'
import {
  getNumCols,
} from 'store/selectors/toolbar-selectors'
import { getRequestStatus } from 'store/selectors/request-selectors'
import Image from './Image'
import { getImages } from 'store/selectors/image-selectors'
import ImageRow from './ImageRow'
import { green } from 'logger'

const createGroups = (images, numCols) => {
  const grouped = []
  for (var i=0; i<images.length; i+=numCols) {
    grouped.push(images.slice(i,i+numCols))
  }
  return grouped
}

class Images extends React.Component {
  state = {
    selected: [],
  }

  deleteImage = async (key) => {
    // green('deleteImage: key', key)
    await this.props.imagesDeleteOneRequest(key)
  }

  renderImages = () => {

    const { images, numCols, width } = this.props
    const imageGroups = createGroups(images, numCols)
    // green('imageGroups', imageGroups)
    return imageGroups.map((ig, idx) => {
      return (
        <ImageRow key={`ig${idx}`}>
          {
            ig.map(img => {
              return (
                <Image
                  key={img.Key}
                  image={img}
                  numCols={numCols}
                  deleteImage={this.deleteImage}
                  width={width}
                />
              )
            })
          }
        </ImageRow>
      )
    })
  }

  render() {

    const { classes, images, deleteRequestStatus } = this.props
    if (images === undefined) { return null }
    if (deleteRequestStatus === 'pending') return null
    // green('size', this.state.size)
    // green('Images: width', this.props.width)
    return (
      <div className={classes.wrapper}>
        {this.renderImages()}
      </div>
    )
  }
}

const styles = theme => ({
  wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.medium,
    overflow: 'auto',
  }
})

const mstp = (state) => {
  return {
    images: getImages(state),
    deleteRequestStatus: getRequestStatus(state, imagesDeleteOneRequestKey),
    numCols: getNumCols(state),
  }
}

const actions = { imagesDeleteOneRequest }

export default compose(
  injectSheet(styles),
  connect(mstp, actions)
)(Images)