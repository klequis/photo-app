import { fetchUploadImage, fetchJson } from './api-helpers'
/* Dev */
// eslint-disable-next-line
import { pink } from 'logger'

export default {
  events: {
    async read(user) {
      try {
        const data = await fetchJson(
          '/api/events',
          {
            method: 'GET',
          }
        )
        return data.data
      }
      catch (e) {
        const error = await e.error
        throw error
      }
    },
  },
  images: {
    async list() {
      pink('images.list')
      try {
        const data = await fetchJson(
          '/api/images',
          {
            method: 'GET'
          }
        )
        pink('data', data)
        return { data }
      }
      catch (e) {
        const error = await e.error
        throw error
      }

    },
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
