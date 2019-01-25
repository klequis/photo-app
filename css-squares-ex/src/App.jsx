import React, { Component } from 'react'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
import Image from './Image'


const groupImages = (images, numCols) => {
  const grouped = []
  for (var i=0; i<images.length; i+=numCols) {
    grouped.push(images.slice(i,i+numCols))
  }
  return grouped
}

const renderImages = () => {
  const imageGroups = groupImages(mockProps.images, mockProps.numCols)
  // console.log('imageGroups', imageGroups)
  return imageGroups.map((ig, idx) => {
    return (
      <div id='image-row' style={{
          backgroundColor: 'blue',
          display: 'flex',
        }}>
        {
          ig.map(img => {
            return (
              <Image
                name={img.name}
              />
            )
          })
        }
      </div>
    )
  })
}

class App extends Component {
  render() {
    const { classes } = this.props
    return (
      <div id='App-wrapper' className={classes.wrapper}>
        {renderImages()}
      </div>
    );
  }
}

const styles = {
  wrapper: {
    height: '100vh',

  }
}

export default compose(
  injectSheet(styles)
)(App)
