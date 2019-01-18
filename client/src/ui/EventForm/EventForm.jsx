import React from 'react'
import { reduxForm } from 'redux-form'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
import UploadImage from 'elements/UploadImage'

class EventForm extends React.Component {
  state = {
    imageUrl: '',
    free: this.props.free,
    // areYouSure: false,
  }

  onSubmit = (values) => {
    const { mode, eventUpdate, eventCreate } = this.props
    // if (mode === EDIT_MODE) {
    //   eventUpdate(values)
    // } else {
    //   eventCreate(values)
    // }
  }

  onCancel = (pristine) => {
    if (pristine) {
      this.props.goBack()
    } else {
      // this.setState({ areYouSure: true })
      alert('are you sure disabled')
    }
  }

  closeModal = (close) => {
    // the modal always closes when button yes
    // or no is clicked
    // this.setState({ areYouSure: false }) are you sure disabled

    // but the form only closes on yes click
    if (close) {
      this.props.goBack()
    }
  }


  render() {
    const { classes } = this.props
    return (
      <div id='EventForm' className={classes.wrapper}>
        <div id='UploadImage-inner' className={classes.inner}>
          <UploadImage
            fieldName='imageUrl'
            fieldLabel='Upload Image'
            enableEdit={true}
          />
        </div>
      </div>
    )
  }
}

const styles = {
  wrapper: {
    // backgroundColor: 'red',
    width: 100,
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  inner: {
    maxWidth: 400,
    display: 'flex',
    justifyContent: 'center',
  }
}
export default compose(
  injectSheet(styles),
  reduxForm({
    form: 'EventForm',
  })
)(EventForm)
