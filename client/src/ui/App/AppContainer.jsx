import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { parse } from '../../api/cookie-parser'
import jwt from 'jsonwebtoken'
import 'url-search-params-polyfill'
import withRoot from 'ui/withRoot'
import { getMaxKeys } from 'store/selectors/toolbar-selectors'

// Store
import {
  userSetLoggedIn,
} from 'store/actions/auth-actions'
import {
  getUserId
} from 'store/selectors/auth-selectors'
import {
  imagesListRequest,
} from 'store/actions/image-actions'
// User
import App from './App'
// import { red } from 'logger'
import { green } from 'logger'

class AppContainer extends React.Component {

  constructor(props) {
    super(props)
    let user
    if (document.cookie) {
      const tokenObj = parse(document.cookie)
      const decoded = jwt.decode(tokenObj.token, { complete: true })
      user = {
        id: decoded.payload.id,
        email: decoded.payload.email,
        token: tokenObj.token
      }
      this.props.userSetLoggedIn(user)
    }
  }

  getImages = () => {
    green('AppContainer.getImages: maxKeys', this.props.maxKeys)
    this.props.imagesListRequest(this.props.maxKeys)
  }

  componentDidMount() {
    this.getImages()
  }

  componentDidUpdate() {
    // green('AppContainer.componentDidUpdate: maxKeys', this.props.maxKeys)
    this.getImages()
  }

  render() {
    return (
      <App />
    )
  }
}

const actions = { userSetLoggedIn, imagesListRequest }

const mapStateToProps = (state) => {
  return {
    userId: getUserId(state),
    maxKeys: getMaxKeys(state),
  }
}

export default compose(
  withRoot,
  connect(mapStateToProps, actions),
)(AppContainer)
