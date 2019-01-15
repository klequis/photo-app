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

export const listImages = (state = [], { type, payload }) => {
  switch (type) {
    case imagesListKey:
      return payload.images
    default:
      return state
  }

}
