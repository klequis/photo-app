import React from 'react'
import classNames from 'classnames'
import injectSheet from 'react-jss'

const Input = ({
  classes,
  className: classNameProp,
  onChange,
  type,
  value
}) => {
  const cls = classNames([classNameProp, classes.input])
  return (
    <input
      className={cls}
      onChange={onChange}
      style={{textAlign: 'center'}}
      type={type}
      value={value}
    />
  )
}

const styles = theme => ({
  input: {
    // style
    border: '1px solid #343740',
    // fontFamily: '"Open Sans", sans-serif',
    fontSize: '0.75rem',
    padding: '0.224rem 0.3rem',
    lineHeight: '14px',
    fontWeight: 300,
    color: '#cec6c6',
    backgroundColor: '#252933',
    backgroundClip: 'padding-box',
    borderRadius: 2,
    transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
    // outlineWidth: 0,
    // outlineColor: 'transparent',
    margin: 0,
    textAlign: 'center',
  }
})
export default injectSheet(styles)(Input)