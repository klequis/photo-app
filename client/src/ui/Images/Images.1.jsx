import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import Image from './Image'
import { getImages } from 'store/selectors/image-selectors'
import { green } from 'logger'
import ImageRow from './ImageRow'

const Images = ({ images, classes, numCols }) => {
  const numImages = images.length
  const numRows = numImages / numCols


  if (images === undefined) { return null }
  green('Images.images', images)

  // green('*not null')

  // const renderImages = images.map((i, idx) => {
  //   return <Image key={idx} image={i} />
  // })

  const groupImages = (size) => {
    const grouped = []
    for (var i=0; i<images.length; i+=size) {
      grouped.push(images.slice(i,i+size));
    }
    return grouped
  }

  green('groupImages', groupImages(3))

  const renderImages = () => {

    return (
      [
        <ImageRow>
          <Image image={images[0]}/>
          <Image image={images[1]}/>
          <Image image={images[2]}/>
        </ImageRow>,
        <ImageRow>
          <Image image={images[3]}/>
          <Image image={images[4]}/>
          <Image image={images[5]}/>
        </ImageRow>,
        <ImageRow>
          <Image image={images[6]}/>
          <Image image={images[7]}/>
        </ImageRow>
      ]
    )
  }

  green('Images: renderImages', renderImages())
  return (
    <div className={classes.wrapper}>
      {renderImages()}
    </div>
  )
}

const styles = theme => ({
  wrapper: {
    display: 'flex',
    flexFlow: 'row wrap'

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