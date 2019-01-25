import React from 'react'
import injectSheet from 'react-jss'

const Button = ({ children, classes }) => {
  return (
    <button className={classes.button}>Refresh</button>
  )
}

const styles = theme => ({
  button: {
    backgroundColor: theme.palette.background.dark,
    backgroundImage: 'none', // ?
    boxShadow: 'none', //?
    border: '1px solid rgb(36, 110, 195)',
    borderRadius: '0.1875rem',
    color: '#fff',
    cursor: 'pointer',
    display: 'inline-block', //?
    fontFamily: '"Open Sans", sans-serif',
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.5,
    margin: 0,
    outline: 0, //?
    outlineOffset: 0, //?
    overflow: 'visible',
    padding: '0.56rem 1.375rem',
    textAlign: 'center', //?
    textDecoration: 'none', //?
    textTransformation: 'none', //?
    verticalAlign: 'middle', //?
    whiteSpace: 'nowrap', //?



  }
})
export default injectSheet(styles)(Button)