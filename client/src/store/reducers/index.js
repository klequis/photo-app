import { combineReducers } from 'redux'
import requests from './requests'
import imageUpload from './upload-image'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  imageUpload,
  requests,
  form: formReducer,
})
