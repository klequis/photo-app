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
    deleteImage,
  } = props
  green('numCols', numCols)
  const wrapperStyle = {
    flexBasis: `${100/numCols}%`
    // flexBasis: '33.333333%',
  }

return (
    <div className={classes.wrapper} style={wrapperStyle}>
      <div className={classes.wrapperInner}>
        <div className={classes.inner}>
          {/* <ImageToolbar
            deleteImage={deleteImage}
            imageKey={image.Key}
          /> */}
          <img src={image.url} alt='unknown' className={classes.imgFluid} />
        </div>
      </div>
    </div>
  )
}
// border: '1px solid white',
const styles = theme => ({
  wrapper: {
    fontWeight: 'bold',
    color: 'white',
    flexGrow: 0,
    flexShrink: 0,
    position: 'relative',
    '&::after': {
      content: '""',
      float: 'left',
      display: 'block',
      paddingTop: '100%'
    },

    // margin: 2,
    // border: '1px solid red',
    backgroundColor: 'transparent',
    padding: 1,
  },
  wrapperInner: {
    width: '100%',
    height: '100%',
    borderRadius: '4%',
    padding: 2,
    // border: '1px solid green',
    background: theme.palette.background.light,
    '&:hover': {
      backgroundColor: theme.palette.background.bright,
    },
  },
  inner: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'blue',
    margin: '0.5rem',
    // border: '1px solid blue',
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