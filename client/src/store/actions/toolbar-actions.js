import { createRequestThunk, logError } from './action-helpers'
import api from 'api'
// import { orange } from 'logger'


/*
    number of columns in images view
*/
export const toolbarSetNumColsKey = 'toolbarSetNumColsKey'
export const toolbarSetNumCols = (numCols) => ({
  type: toolbarSetNumColsKey,
  payload: { numCols },
})


/*
    maximum number of images to retrieve
*/
export const toolbarSetMaxKeysKey = 'toolbarSetMaxKeysKey'
export const toolbarSetMaxKeys = (numKeys) => ({
  type: toolbarSetMaxKeysKey,
  payload: { numKeys },
})