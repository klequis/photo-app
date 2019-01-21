import React from 'react'
import { Link } from 'react-router-dom'
import injectSheet from 'react-jss'
import classNames from 'classnames'

const ButtonLink = ({ children, classes, to }) => {
  const clsNames = classNames(
    classes.button,
    classes.ripple
  )
  return (
    <Link to={to} className={classes.link}>
      <button className={clsNames}>{children}</button>
    </Link>
  )
}


const styles = theme => ({
  link: {
    fontSize: '0.7rem',
    // margin: 0,
    padding: 0,
    border: 'none',
    margin: '0 5px',
  },
  button: {
    backgroundColor: theme.palette.background.dark,
    backgroundImage: 'none', // ?
    boxShadow: 'none', //?
    border: `1px solid ${theme.palette.background.light}`,
    borderRadius: '0.1875rem',
    color: '#fff',
    cursor: 'pointer',
    display: 'inline-block', //?
    fontFamily: '"Roboto", sans-serif',
    fontSize: '0.7rem',
    letterSpacing: 1,
    // fontWeight: 400,
    lineHeight: 1.5,
    margin: 0,
    outline: 0, //?
    outlineOffset: 0, //?
    overflow: 'visible',
    // padding: '0.56rem 1.375rem',
    padding: '0.112rem 0.275rem',
    textAlign: 'center', //?
    textDecoration: 'none', //?
    textTransformation: 'none', //?
    verticalAlign: 'middle', //?
    whiteSpace: 'nowrap', //?
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

export default injectSheet(styles)(ButtonLink)
