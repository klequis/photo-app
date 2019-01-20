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
import { merge } from 'ramda'
import { green } from 'logger'
import withSizes from 'react-sizes'

const createGroups = (images, numCols) => {
  const grouped = []
  for (var i=0; i<images.length; i+=numCols) {
    grouped.push(images.slice(i,i+numCols))
  }
  return grouped
}

const addGroupMeta = (groups) => {
  const numGroups = groups.length
  const newGroups = []

  for (let i=0; i<numGroups; i++) {

    const numItemsPreviousGroup = i !== 0 ? groups[i-1].length : 0
    // const numItemsNextGroup = i + 1 < numGroups ? groups[i+1].length : 0
    const numItemsInGroup = groups[i].length

    const newGroup = groups[i].map((i, idx) => {
      const itemPosition = idx + 1 // 1 through the number of cols
      // const bottom = itemPosition <= numItemsNextGroup ? 0 : 4
      const top = itemPosition <= numItemsPreviousGroup ? 0 : 4


      const right = itemPosition < numItemsInGroup ? 0 : 4

      // green(`itemPosition:${itemPosition}, numItems:${numItemsInGroup}, right:${right}`)
      // const padding = `4px ${right}${right !== 0 ? 'px' : ''} ${bottom}${bottom !== 0 ? 'px' : ''} 4px`
      // const paddingTop = `${top}${top !== 0 ? 'px' : ''}`
      // const paddingRight = `${right}${right !== 0 ? 'px' : ''}`
      // const padding = `${paddingTop} ${paddingRight} 4px 4px`
      const a = [top, right, 4, 4]
      const iNew = merge(i, { padding: a })

      return iNew
    })

    newGroups.push(newGroup)

  }

  return newGroups

}

const groupImages = (images, numCols) => {
  const groups = createGroups(images, numCols)
  const groupsWithMeta = addGroupMeta(groups)
  return groupsWithMeta
}

class Images extends React.Component {
  state = {
    selected: [],
    size: {},
  }

  refCallback = element => {
    this.setState({
      size: element.getBoundingClientRect()
    })
  }

  deleteImage = async (key) => {
    // green('deleteImage: key', key)
    await this.props.imagesDeleteOneRequest(key)
  }

/*
Bottom Margin
- numItemsNextRow
- positionCurrentItem
*/

  renderImages = () => {

    const { images, numCols, width } = this.props
    const imageGroups = groupImages(images, numCols)
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
    green('Images: width', this.props.width)
    return (
      <div ref={this.refCallback} className={classes.wrapper}>
        {this.renderImages()}
        {/* <p>width: {this.props.width}</p> */}
      </div>
    )
  }
}

const styles = theme => ({
  wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: 'blue',
    // display: 'flex',
    // flexFlow: 'row wrap'

  }
})

const mstp = (state) => {
  return {
    images: getImages(state),
    deleteRequestStatus: getRequestStatus(state, imagesDeleteOneRequestKey),
    numCols: getNumCols(state),
  }
}

const mapSizesToProps = ({ width }) => ({
  width,
})

const actions = { imagesDeleteOneRequest }

export default compose(
  injectSheet(styles),
  withSizes(mapSizesToProps),
  connect(mstp, actions)
)(Images)