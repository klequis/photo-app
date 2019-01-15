import React from 'react'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import withWidth from '@material-ui/core/withWidth';


const Images = ({ classes, images, width }) => {
  console.log('width', width)
  const h = (width - (3 * 8))/3
  console.log('h', h)
  const itemWrapperStyle = {
    height: (width - (3 * 8))/3,
    backgroundColor: 'green',
    border: '1px solid red',
  }
  const renderImages = images.map(i => {
    return (
      <div className={classes.itemWrapper} style={itemWrapperStyle}>
        <div className={classes.imgItem}>
          {/* <img
            src={i.url}
            className={classes.imgFluid}
              alt='hi'
          /> */}
        </div>
      </div>

    )
  })
  return (
    <div className={classes.wrapper}>
        {renderImages}
    </div>
  )
}

/*

*/

const styles = theme => ({
  wrapper: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'flex-start',
    width: '100vw',
    height: '100vh',

  },
  itemWrapper: {
    padding: 8,
    // backgroundColor: 'transparent',
    flexBasis: '33.333333%',
    // height: '100%',
    // flexGrow: 1,
    // flexShrink: 1,
  },
  imgItem: {
    backgroundColor: 'grey',
    // height: 250,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgFluid: {
    display: 'block',
    width: '80%',
    maxHeight: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
})
export default compose(
  withWidth(),
  withStyles(styles)
) (Images)