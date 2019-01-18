import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
// import classNames from 'classnames'

const styles = {
  imgFluid: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  imgSize: {
    // width: props => props.width,
    width: '33.333333%',
    // height: 20,
    backgroundColor: 'white',
    margin: 10,
  }
}

const ResponsiveImage = ({ alt, classes, src, className: classNameProp, width }) => {
  // const cls = classNames(classes.imgFluid, classNameProp)
  return (
    <div className={classes.imgSize}>
      <img src={src} alt={alt} className={classes.imgFluid} />
    </div>
  )
}

export default withStyles(styles)(ResponsiveImage)

ResponsiveImage.propTypes = {
  alt: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
}