import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import iDeleteForever from 'media/icons/delete-forever.svg'

/*
    type: delete
*/

const getIcon = (type) => {
  // future: have different types
  return <img
    src={iDeleteForever}
    alt='delete'
  />
}

const ButtonIcon = ({ children, classes, type }) => {
  const clsNames = classNames(
    classes.button,
    classes.ripple
  )
  const ico = getIcon(type)
  return (
    <button className={clsNames}>{ico}</button>
  )
}


const styles = theme => ({
  button: {
    // backgroundColor: theme.palette.background.dark, //-
    backgroundColor: 'transparent',
    backgroundImage: 'none', // ?
    // boxShadow: 'none', //?-
    // border: `1px solid ${theme.palette.background.light}`,//-
    border: 'none',
    // borderRadius: '0.1875rem',
    // color: '#fff',
    cursor: 'pointer',
    display: 'inline-block', //?
    // fontFamily: '"Roboto", sans-serif',
    // fontSize: '0.7rem',
    // letterSpacing: 1,
    // fontWeight: 400,
    // lineHeight: 1.5,
    margin: '0 5px',
    // outline: 0, //?
    // outlineOffset: 0, //?
    // overflow: 'visible',
    // padding: '0.56rem 1.375rem',
    padding: '0.112rem 0.275rem',
    // textAlign: 'center', //?
    // textDecoration: 'none', //?
    // textTransformation: 'none', //?
    // verticalAlign: 'middle', //?
    // whiteSpace: 'nowrap', //?
  },
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

})

export default injectSheet(styles)(ButtonIcon)