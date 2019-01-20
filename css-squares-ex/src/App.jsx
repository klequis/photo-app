import React, { Component } from 'react'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
import { merge } from 'ramda'
import Image from './Image'

const mockProps = {
  numCols: 3,
  images: [
    { name: 1 },
    { name: 2 },
    { name: 3 },
    { name: 4 },
    { name: 5 },
    { name: 6 },
    { name: 7 },
    { name: 8 },
    { name: 9 },
    { name: 10 },
    { name: 11 },
    { name: 12 },
    { name: 13 },
    { name: 14 },
    { name: 15 },
    { name: 16 },
    { name: 17 },
    { name: 18 },
    { name: 19 },

  ],
}

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
