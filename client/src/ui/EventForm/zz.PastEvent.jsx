import React from 'react'
import Text from 'elements/Text'
import injectSheet from 'react-jss'

const PastEvent = ({ classes, event }) => {
  return (
    event === {}
    ? <div>
        <Text body1 className={classes.pastEvent}>
          This event is in the past
        </Text></div>
    : null
  )
}

const styles = theme => ({
  pastEvent: {
    backgroundColor: theme.palette.error.dark,
    color: theme.palette.error.contrastText,
  }
})

export default injectSheet(styles)(PastEvent)
