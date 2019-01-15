import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import Image from './Image'
import { getImages } from 'store/selectors/image-selectors'
import { green } from 'logger'
import ImageRow from './ImageRow'

const groupImages = (images, numCols) => {
  green('images', images)
  green('numCols', typeof numCols)
  const grouped = []
  for (var i=0; i<images.length; i+=numCols) {
    green('i', typeof i)
    grouped.push(images.slice(i,i+numCols))
  }
  green('groupImages: grouped', grouped)
  return grouped
}

const Images = ({ images, classes, numCols }) => {
  // const numImages = images.length
  // const numRows = numImages / numCols


  if (images === undefined) { return null }

  const imageGroups = groupImages(images, numCols)

  const renderedImages = imageGroups.map((ig, idx) => {
    return (
      <ImageRow key={`ig${idx}`}>
        {
          ig.map(img => {
            return (
              <Image
                key={img.Key}
                image={img}
                numCols={numCols}
              />
            )
          })
        }
      </ImageRow>
    )
  })




  return (
    <div className={classes.wrapper}>
      {renderedImages}
    </div>
  )
}

const styles = theme => ({
  wrapper: {
    // display: 'flex',
    // flexFlow: 'row wrap'

  }
})

const mstp = (state) => {
  return {
    images: getImages(state)
  }
}
export default compose(
  withStyles(styles),
  connect(mstp)
)(Images)