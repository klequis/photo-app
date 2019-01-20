import React from 'react'

const withSizes = Component => {
  return class ComponentWithSizes extends React.Component {

    state = {
      size: {}
    }

    refCallback = element => {
      this.setState({
        size: element.getBoundingClientRect()
      })
    }

    render() {
      return <Component { ...this.props }>
        <div ref={this.refCallback}>

        </div>
      </Component>
    }
  }
}

export default withSizes
