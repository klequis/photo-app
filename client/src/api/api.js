import { fetchUploadImage } from './api-helpers'

/* Dev */
// eslint-disable-next-line
import { pink } from 'logger'

export default {
  images: {
    create(formData) {
      return fetchUploadImage(
        '/api/images',
        {
          method: 'POST',
          body: formData
        }
      ).then(data => {
        return data
      }).catch(e => {
        const error = e.error
        throw error
      })
    },
  },
}
