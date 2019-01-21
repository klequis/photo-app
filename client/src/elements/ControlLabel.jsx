import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'
import Text from 'elements/Text'

const ControlLabel = ({ children, className: classNameProp, classes }) => {
  const cls = classNames([classes.label, classNameProp])
  return (
    <label
      className={cls}
    >
      <Text caption className={classes.text} noMargin>
        {children}
      </Text>
    </label>
  )
}

const styles = theme => ({
  label: {
    marginRight: '0.4rem',
  },
  text: {
    // fontSize: '0.5rem'
    fontSize: '0.7rem',
    letterSpacing: 1,
  }
})
export default injectSheet(styles)(ControlLabel)