import React, { Component } from 'react'
import { connect } from 'react-redux'
import { requestAccountAccess } from '../../core/libs/lib-metamask-helper'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import img from '../../assets/images/1_ARRTSA.jpg'

class HomeView extends Component {
  componentDidMount() {
    const { provider: { web3Provider } } = this.props
    requestAccountAccess(act => console.log(act))
  }

  render() {
    return (
      <Grid className='container' container spacing={8} alignItems="center">
        <Grid item xs={8}>
          <h1>About the Projansky Contract</h1>
          <p>Use the contract interface <a href="#interface">here</a>.</p>

          <img style = {{ maxWidth: '100%' }} src={img} />
        </Grid>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  return {
    provider: state.provider
  }
}
export default connect(mapStateToProps)(HomeView)
