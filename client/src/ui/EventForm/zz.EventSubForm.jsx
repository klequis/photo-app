import React from 'react'
import { reduxForm } from 'redux-form'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
import Text from 'elements/Text'
// User
import UploadImage from 'elements/UploadImage'

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
      <form className={classes.form}>
        <div className={classes.paper} elevation={0}>
          <Text h2>EVENT IMAGE</Text>
          <div id='dropZone' className={classes.dropZone}>
            <UploadImage
              fieldName='imageUrl'
              fieldLabel='Upload Image'
              enableEdit={true}
            />
          </div>
        </div>

        <div className={classes.actions}>
          <button
            type='button'
            onClick={handleSubmit(onSubmit)}
            disabled={pristine || submitting}
          >
            Save
          </button>
          <button
            type='button'
            onClick={() => onCancel(pristine)}
            disabled={submitting}
          >
            Cancel
          </button>
        </div>
      </form>

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
      // backgroundColor: 'rgb(225, 225, 225)',
      paddingTop: space,
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
  injectSheet(styles),
  reduxForm({
    form: 'EventForm',
  })
)(EventSubForm)