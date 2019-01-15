import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
// User
import { eventsReadRequest } from 'redux/actions/event-actions'
import { getImages } from 'redux/selectors/image-selectors'
import App from './App'
import { green } from 'logger'

class AppContainer extends React.Component {
  componentDidMount() {
    green('componentDidMount')
    // imagesListRequest()
  }
  render() {
    const { images } = this.props
    green('AppContainer: images', images)
    if (images === undefined) return null
    return (
      <h1>hi</h1>

    )
  }
}

/* <App
        images={images}
      /> */

const mapStateToProps = (state) => {
  return {
    images: getImages(state)
  }
}

export default connect(mapStateToProps, eventsReadRequest)(AppContainer)