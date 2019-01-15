import React from 'react'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import withSizes from 'react-sizes'
import { green } from 'logger'

const Image = (props) => {
  const { classes, image, numCols, width } = props
  const calcWidth = (width - 20) / numCols

  const wrapperStyle = {
    height: calcWidth,
    flexBasis: `${100 / numCols}%`
  }
  return (
    <div className={classes.wrapper} style={wrapperStyle}>
      <img src={image.url} alt='unknown' className={classes.imgFluid} />
    </div>
  )
}

const styles = theme => ({
  wrapper: {
    backgroundColor: 'rgb(50, 50, 50)',
    margin: 1,
    padding: '0 16px',
    display: 'flex',
    alignItems: 'center',
    flexGrow: 0,
    flexShrink: 0,
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
  withStyles(styles),
  withSizes(mapSizesToProps)
)(Image)