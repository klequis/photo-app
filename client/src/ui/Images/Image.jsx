import React from 'react'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
import ImageToolbar from './ImageToolbar'
import withSizes from 'react-sizes'
import { green } from 'logger'

const Image = (props) => {
  const {
    classes,
    image,
    numCols,
    width,
    deleteImage,
    myWidth
  } = props



  green('Image: width', width)
  green('Image: margin', image.padding)
  green('Image: myWidth', myWidth)


  /* Calc height of image to be same as width */
  //
  const sumOfMargins = numCols * 4 // sum of left & right margins

  const availableWidth = width - sumOfMargins
  // const calcWidth = (width - ((numCols+1) * 4)) / numCols

  const wrapperStyle = {
    // height: calcWidth,
    flexBasis: `${100 / numCols}%`,
    margin: image.padding,
  }

  // green('wrapperStyle', wrapperStyle.padding)
  return (
    <div className={classes.wrapper} style={wrapperStyle}>
      {/* <div className={classes.inner}>
      <ImageToolbar
        deleteImage={deleteImage}
        imageKey={image.Key}
      />
      <img src={image.url} alt='unknown' className={classes.imgFluid} />
      </div> */}
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
    position: 'relative',
    // '&:nth-child(-n+2)': {
      // backgroundColor: 'blue',
      // // border: '3px solid blue',
      // padding: '4px 0 0 4px',
    // },
    border: '1px solid red'
  },
  inner: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgb(50, 50, 50)',
    padding: '0 16px',
    width: '100%',
    height: '100%',
    // border: '1px solid green'
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
  myWidth: width,
})

export default compose(
  injectSheet(styles),
  withSizes(mapSizesToProps),
)(Image)