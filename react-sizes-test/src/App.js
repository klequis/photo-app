import React, { Component } from 'react'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
import { merge } from 'ramda'
import Image from './Image'

const numCols = 3
const images = [
  { name: 'one' },
  { name: 'two' },
  { name: 'three' },
  // { name: 'four' }
]

const createGroups = () => {
  const grouped = []
  for (var i=0; i<images.length; i+=numCols) {
    grouped.push(images.slice(i,i+numCols))
  }
  return grouped
}

const addGroupMeta = (groups) => {
  const numGroups = groups.length
  const newGroups = []
  for (let i=0; i<numGroups; i++) {
    const numItemsPreviousGroup = i !== 0 ? groups[i-1].length : 0
    const numItemsInGroup = groups[i].length
    const newGroup = groups[i].map((i, idx) => {
      const itemPosition = idx + 1 // 1 through the number of cols
      const top = itemPosition <= numItemsPreviousGroup ? 0 : 4
      const right = itemPosition < numItemsInGroup ? 0 : 4
      const a = [top, right, 4, 4]
      const iNew = merge(i, { padding: a })
      return iNew
    })
    newGroups.push(newGroup)
  }
  return newGroups
}

const groupImages = (images, numCols) => {
  const groups = createGroups()
  const groupsWithMeta = addGroupMeta(groups)
  return groupsWithMeta
}

const renderImages = () => {
  const imageGroups = groupImages(images)
  // console.log('imageGroups', imageGroups)
  return imageGroups.map((ig, idx) => {
    return (
      <div id='image-row' style={{
          backgroundColor: 'blue',
          display: 'flex',
          height: '100%',
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
