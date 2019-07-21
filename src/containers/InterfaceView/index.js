import React, { Component } from 'react'
import { connect } from 'react-redux'
import { requestAccountAccess } from '../../core/libs/lib-metamask-helper'
import { bindActionCreators } from 'redux'
import * as uiActionCreators from 'core/actions/actions-ui'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class InterfaceView extends Component {
  componentDidMount() {
    const { provider: { web3Provider } } = this.props
    requestAccountAccess(act => console.log(act))
  }

  render() {
    const { address, actions: { ui: { setAddress } } } = this.props;
    console.log(this.props)
    return (
      <Grid className='container' container spacing={8} alignItems="center">
        <Grid item xs={12} sm={8}>
          <TextField
            id="outlined-helperText"
            label="Contract Address"
            value={address}
            fullWidth
            variant="outlined"
            margin="dense"
            onChange={e => setAddress(e.target.value)}
          />
        </Grid>
        <Grid item sm xs>
          <Button variant="contained" fullWidth>
            View Tokens
          </Button>
        </Grid>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  return {
    provider: state.provider,
    address: state.ui.address
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      ui: bindActionCreators(uiActionCreators, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InterfaceView)
