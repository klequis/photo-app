import { merge } from 'ramda'
import {
  toolbarSetNumColsKey,
  toolbarSetMaxKeysKey,
} from '../actions/toolbar-actions'

// eslint-disable-next-line
import { blue } from 'logger'

export const numCols = (state = 7, { type, payload }) => {
  switch (type) {
    case toolbarSetNumColsKey:
      return payload.numCols
    default:
      return state
  }
}

export const maxKeys = (state = 25, { type, payload }) => {
  switch (type) {
    case toolbarSetMaxKeysKey:
      return payload.numKeys
    default:
      return state
  }
}



