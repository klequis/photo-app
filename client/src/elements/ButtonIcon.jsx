import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import DeleteForever from 'media/svg/DeleteForever'
import Ink from 'react-ink'

/*
    type: delete
*/

const getIcon = (type) => {
  // future: have different types
  return <DeleteForever />
}

const ButtonIcon = ({ classes }) => {
  const clsNames = classNames([
    classes.root,
  ])
  return (
    <button className={clsNames}>
      <Ink opacity={0.5}/>
      {getIcon()}
    </button>
  )
}

const hoverColor = '#FF0050'

const styles = {
  root: {
    alignItems: 'center',
    backgroundColor: 'rgb(157, 0, 56)',
    borderImageOutset: 0,
    borderImageRepeat: 'stretch',
    borderImageSlice: '100%',
    borderImageSource: 'none',
    borderImageWidth: 1,
    borderColor: 'rgb(255, 255, 255)',
    borderRadius: '50%',
    borderStyle: 'none',
    borderLeftStyle: 'none',
    borderWidth: 0,
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px',
    boxSizing: 'border-box',
    color: 'white',
    cursor: 'pointer',
    display: 'inline-flex',
    fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeight: 500,
    // height: 20,
    justifyContent: 'center',
    letterSpacing: 0.4,
    // minHeight: 20,
    minWidth: 0,
    outlineColor: 'rgb(200, 140, 155)',
    outlineStyle: 'none',
    outlineWidth: 0,
    padding: 0,
    position: 'relative',
    textDecoration: 'none',
    textTransform: 'none',
    transitionDelay: '0s, 0s, 0s',
    transitionDuration: '0.25s, 0.25s, 0.25s',
    transitionProperty: 'background-color, box-shadow, border',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1), cubic-bezier(0.4, 0, 0.2, 1), cubic-bezier(0.4, 0, 0.2, 1)',
    verticalAlign: 'middle',
    // width: 20,
    MozAppearance: 'none',
    MozUserSelect: 'none',
    '&:hover': {
      backgroundColor: hoverColor,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: hoverColor,
      },
    },
    '&:active': {
      boxShadow: '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
    },
  },
}

export default injectSheet(styles)(ButtonIcon)