import React from 'react'
import injectSheet from 'react-jss'
import Text from 'elements/Text'

const A = ({ classes, children, color}) => {

  return (
    <Text
      h4
      align='center'
      color={color}
      className={classes.heading}
    >
      {children}
    </Text>
  )
}

const styles = theme => ({
  heading: {
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,

  }
})

export default injectSheet(styles)(A)
