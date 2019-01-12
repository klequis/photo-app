import React from 'react'
import withRoot from 'ui/withRoot'
// User
import App from './App'

class AppContainer extends React.Component {
  render() {
    return (
      <App />
    )
  }
}

export default withRoot(AppContainer)