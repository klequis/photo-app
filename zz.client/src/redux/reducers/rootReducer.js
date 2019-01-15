import { combineReducers } from 'redux'
import requests from './requests'
import { imageUpload, imagesList } from './images'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  imagesList,
  imageUpload,
  requests,
  form: formReducer,
})
