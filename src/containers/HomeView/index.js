import React, { Component } from 'react'
import { connect }            from 'react-redux'
import { requestAccountAccess } from '../../core/libs/lib-metamask-helper'

class HomeView extends Component {
  componentDidMount() {
    const { provider: { web3Provider } } = this.props
    requestAccountAccess(act => console.log(act))
  }

  render() {
    return (
      <div className="container">Hello </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    provider: state.provider
  }
}
export default connect(mapStateToProps)(HomeView)
