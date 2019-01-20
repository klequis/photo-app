import React, { Component } from 'react'
import Image from './Image'

const groupImages = (images, numCols) => {
  const grouped = []
  for (var i=0; i<images.length; i+=numCols) {
    grouped.push(images.slice(i,i+numCols))
  }
  return grouped
}


const renderImages = () => {
  // Data


  // Stays
  const imageGroups = groupImages(mockProps.images, mockProps.numCols)
  // console.log('imageGroups', imageGroups)
  return imageGroups.map((ig, idx) => {
    return (
      <div id='image-row' style={{
          backgroundColor: 'blue',
          display: 'flex',
          height: '100vh',
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