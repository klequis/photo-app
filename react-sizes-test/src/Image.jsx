import React from 'react'
import injectSheet from 'react-jss'
import { compose } from 'recompose'
import withSizes from './withSizes'

// id={`image-${img.name}`} style={{flexBasis: '33.333333%'}}

class Image extends React.Component {

  render() {
    const { classes, name } = this.props
    console.log('Image: width', this.state)
    const height = 50
    return (
      <div className={classes.wrapper} style={{ height: height}}>
        name: {name}<br/>
        w/h: {height}
      </div>
    )
  }


}

const styles = {
  wrapper: {
    flexBasis: `${100/3}%`,
    margin: 4,
    backgroundColor: 'red',
  },
}


export default compose(
  injectSheet(styles),
  withSizes
)(Image)