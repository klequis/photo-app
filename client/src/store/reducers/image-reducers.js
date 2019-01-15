import {
  imageUploadOneKey,
  imagesListKey,
} from '../actions/image-actions'

// eslint-disable-next-line
import { blue } from 'logger'

export const imageUpload = (state = {}, { type, payload }) => {
  switch (type) {
    case imageUploadOneKey:
      const o = {
        imageName: payload.Key,
        imageUrl: payload.Location,
      }
      return o
    default:
      return state
  }
}

export const imagesList = (state = [], { type, payload }) => {
  // blue('imagesList: state', state)
  // blue('imagesList: type', type)

  switch (type) {
    case imagesListKey:
      // blue('imagesList: payload', payload.images.data.images)
      return payload.images.data.images
    default:
      return state
  }

}

