import React from 'react'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
import withSizes from 'react-sizes'
import ImageToolbar from './ImageToolbar'
// import { green } from 'logger'

const Image = (props) => {
  const {
    classes,
    image,
    numCols,
    width,
    deleteImage
  } = props

  // green('Image: image', image)
  const calcWidth = (width - 20) / numCols

  const wrapperStyle = {
    height: calcWidth,
    flexBasis: `${100 / numCols}%`
  }
  return (
    <div className={classes.wrapper} style={wrapperStyle}>
      <div className={classes.inner}>
      <ImageToolbar
        deleteImage={deleteImage}
        imageKey={image.Key}
      />
      <img src={image.url} alt='unknown' className={classes.imgFluid} />
      </div>
    </div>
  )
}
// border: '1px solid white',
const styles = theme => ({
  wrapper: {
    backgroundColor: 'rgb(100, 100, 100)',
    // padding: '4px 4px 4px 4px',

    flexGrow: 0,
    flexShrink: 0,
    // position: 'relative',
    // '&:nth-child(-n+2)': {
      // backgroundColor: 'blue',
      // // border: '3px solid blue',
      // padding: '4px 0 0 4px',
    // },
  },
  inner: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgb(50, 50, 50)',
    padding: '0 16px',
    width: '100%',
    height: '100%',
  },
  imgFluid: {
    display: 'block',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
})

// export default withSizes()(Image)

const mapSizesToProps = ({ width }) => ({
  width,
})

export default compose(
  injectSheet(styles),
  withSizes(mapSizesToProps)
)(Image)