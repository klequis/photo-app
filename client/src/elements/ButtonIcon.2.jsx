import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import DeleteForever from 'media/svg/DeleteForever'


/*
    type: delete
*/

const getIcon = (type) => {
  // future: have different types
  return <DeleteForever />
}

const ButtonIcon = ({ children, classes, type }) => {
  const clsNames = classNames(
    classes.button,
    classes.ripple,
    classes.primary
  )
  // const ico = getIcon(type)
  return (
    <button className={clsNames}>
      <DeleteForever className={classes.del} />
    </button>
  )
}

const styles = theme => ({
  button: {
    ...theme.typography.button,
    boxSizing: 'border-box',
    minHeight: 36,
    transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    borderRadius: '50%',
    padding: 0,
    minWidth: 0,
    width: 56,
    height: 56,
    border: 0,
    cursor: 'pointer',
    display: 'inline-flex',
    outline: 'none',
    position: 'relative',
    alignItems: 'center',
    userSelect: 'none',
    verticalAlign: 'middle',
    justifyContent: 'center',
    textDecoration: 'none',
    textAlign: 'center',

    boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
    '&:active': {
      boxShadow: '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
    },
    // backgroundColor: '#e0e0e0', //-
    backgroundColor: '#e0e0e0',
    '&$focusVisible': {
      boxShadow: '#e0e0e0',
    },
    '&:hover': {
      backgroundColor: '#d5d5d5',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: '#e0e0e0',
      },
      '&$disabled': {
        backgroundColor: 'rgba(0, 0, 0, 0.12)',
      },
      textDecoration: 'none',
    },
    '&$disabled': {
      boxShadow: 'none',
      backgroundColor: 'rgba(0, 0, 0, 0.12)',
    },
  },
  primary: {
    backgroundColor: 'rgb(255, 0, 80)',
    '&:hover': {
      backgroundColor: '#303f9f',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: '#3f51b5',
      },
    },
  },
})

/*
  ripple: {
    backgroundPosition: 'center',
    transition: 'background 0.8s',
    '&:hover': {
      // background: '#47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%) center/15000%', //-
      background: 'transparent radial-gradient(circle, transparent 1%, #333333 1%) center/15000%', //+
    },
    '&:active': {
      // backgroundColor: '#6eb9f7', //-
      backgroundColor: 'transparent', //+
      backgroundSize: '100%',
      transition: 'background 0s',
    },
  }
*/

export default injectSheet(styles)(ButtonIcon)