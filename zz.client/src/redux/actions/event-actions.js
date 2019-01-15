import { createRequestThunk, logError } from './action-helpers'
import api from 'api'


/* Dev */
// eslint-disable-next-line
import { orange, red } from 'logger'


// Read
export const eventsReadKey = 'eventsReadKey'
export const eventsReadRequestKey = 'eventsReadRequestKey'

export const eventsRead = (events) => {
  return ({
    type: eventsReadKey,
    payload: { events },
  })
}

export const eventsReadRequest = createRequestThunk({
  request: api.events.read,
  key: eventsReadRequestKey,
  success: [eventsRead],
  // failure: [(error) => snackbarSet('Could not get events', 'error'), (error) => red('request failed', error)]
})

