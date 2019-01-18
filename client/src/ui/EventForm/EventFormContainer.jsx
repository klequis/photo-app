import React from 'react'
// import { connect } from 'react-redux'
// import { mergeAll, path } from 'ramda'
// import { hasProp } from 'lib/hasProp'
import EventForm from './EventForm'

export const EDIT_MODE = 'edit-mode'
export const CREATE_MODE = 'create-mode'

class EventFormContainer extends React.Component {

  render() {

    return (
      <EventForm />
    )
  }

}

// const mstp = (state, ownProps) => {
//   const eventId = ownProps.match.params.id
//   return {
//     event: getEventById(state, eventId),
//     userId: getUserId(state),
//     eventId,
//   }
// }

// export default connect(
//   mstp,
//   { eventCreateOneRequest, eventUpdateOneRequest },
// )(EventFormContainer)

export default EventFormContainer