import { combineReducers } from 'redux'
import requests from './requests'
import imageUpload from './upload-image'
import { reducer as formReducer } from 'redux-form'
import { imagesList } from './image-reducers'
import { numCols, maxKeys } from './toolbar-reducers'

export default combineReducers({
  imagesList,
  imageUpload,
  requests,
  form: formReducer,
  ui: combineReducers({
    numCols,
    maxKeys,
  })
})
