import React from 'react'

const id = 'DeleteForever-f48e38d7cb84'

const DeleteForever = ({ colorActive, colorInactive, width, opacity = 1 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      externalResourcesRequired="http://purl.org/dc/dcmitype/StillImage"
      // version="1.1"
      height="24"
      width="24"

      id={id}
    >
      <defs id="defs12" />
      <path
        style={{
          fill: '#ffffff',
          fillOpacity: 0
        }}
        id="path2"
        d="M0 0h24v24H0V0z"
        fill="none"
      />
      <path
        style={{
          //fill: '#ffffff',
          fillOpacity:1
        }}
        class='del'
        id='path4'
        d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"
      />
      <path
        style={{
          fill: '#ffffff',
          fillOpacity: 0,
        }}
        id="path6"
        d="M0 0h24v24H0z"
        fill="none"
      />
    </svg>
  )
}

export default DeleteForever