import React from 'react'
import { reduxForm } from 'redux-form'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import {
  Button,
  Paper,
  Typography
} from '@material-ui/core'
import { MuiPickersUtilsProvider } from 'material-ui-pickers'
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils'
// User
import UploadImage from 'ui/elements/UploadImage'

const EventSubForm = (props) => {

  const {
    classes,
    handleSubmit,
    onCancel,
    onSubmit,
    pristine,
    submitting,
  } = props

  return (
    <div id='EventSubForm'>
      <MuiPickersUtilsProvider
        utils={DateFnsUtils}
      >
        <form className={classes.form}>

          <Paper className={classes.paper} elevation={0}>
            <Typography variant='h6'>EVENT IMAGE</Typography>
            <div id='dropZone' className={classes.dropZone}>
              <UploadImage
                fieldName='imageUrl'
                fieldLabel='Upload Image'
                enableEdit={true}
              />
            </div>
          </Paper>

          <div className={classes.actions}>
            <Button
              type='button'
              onClick={handleSubmit(onSubmit)}
              disabled={pristine || submitting}
            >
              Save
            </Button>
            <Button
              type='button'
              onClick={() => onCancel(pristine)}
              disabled={submitting}
            >
              Cancel
            </Button>
          </div>
        </form>

      </MuiPickersUtilsProvider>
    </div>
  )
}

const styles = theme => {
  const space = theme.spacing.unit
  return ({
    actions: {
      marginTop: space * 4,
      paddingBottom: space,
    },
    dropZone: {
      margin: '22px auto',
      maxWidth: 400,
      paddingBottom: 32,

    },
    form: {
      backgroundColor: 'rgb(225, 225, 225)',
      paddingTop: space,
    },
    free: {
      flexBasis: '30%',
    },
    price: {
      flexBasis: '70%',
      paddingRight: 20,
    },
    priceFields: {
      display: 'flex',
    },
    paper: {
      paddingTop: space * 2,
      paddingRight: space * 2,
      paddingLeft: space * 2,
      margin: space * 2,
    },
  })
}

export default compose(
  withStyles(styles),
  reduxForm({
    form: 'EventForm',
  })
)(EventSubForm)