import React from 'react'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
import withSizes from 'react-sizes'
import { green } from 'logger'

const ImageRow = ({ classes, children, width }) => {
  green('ImageRow: width', width)
  return (
    <div id='ImageRow-wrapper' className={classes.wrapper}>
      {children}
    </div>
  )
}

const styles = theme => ({
  wrapper: {
    display: 'flex',
  }
})

const mapSizesToProps = ({ width }) => ({
  width,
})

export default compose(
  injectSheet(styles),
  withSizes(mapSizesToProps)
) (ImageRow)