import { createRequestThunk, logError } from './action-helpers'
import api from 'api'
import { orange } from 'logger'

export const imagesListKey = 'imagesListKey'
export const imagesListRequestKey = 'imagesListRequestKey'

export const imagesList = (images) => {
  return ({
    type: imagesListKey,
    payload: { images }
  })
}

export const imagesListRequest = createRequestThunk({
  request: api.images.list,
  key: imagesListRequestKey,
  success: [ imagesList ],
  // failure: [ (e) => console.log(e)]
})

export const imageUploadOneKey = 'actionKeyUploadOneImage'
export const imageUploadOneRequestKey = 'imageUploadOneRequestKey'

const uploadOneImage = (imageInfo) => ({
  type: imageUploadOneKey,
  payload: imageInfo
})

export const imageUploadOneRequest = createRequestThunk({
  request: api.images.create,
  key: imageUploadOneRequestKey,
  success: [ uploadOneImage ],
  failure: [ error => logError(error, imageUploadOneRequestKey) ],
})

