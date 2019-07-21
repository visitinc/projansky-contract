import React, { Component } from 'react'
import { connect } from 'react-redux'
import { requestAccountAccess } from '../../core/libs/lib-metamask-helper'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class InterfaceView extends Component {
  componentDidMount() {
    const { provider: { web3Provider } } = this.props
    requestAccountAccess(act => console.log(act))
  }

  render() {
    return (
      <Grid className='container' container spacing={8} alignItems="center">
        <Grid item xs={8}>
          <TextField
            id="outlined-helperText"
            label="Contract Address"
            defaultValue="0xBE56F92aC63B2AB00693f7838f7247383c18d0b5"
            fullWidth
            variant="outlined"
            margin="dense"
          />
        </Grid>
        <Grid item xs>
          <Button variant="contained" fullWidth>
            View Tokens
          </Button>
        </Grid>
        <form>
        </form>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  return {
    provider: state.provider
  }
}
export default connect(mapStateToProps)(InterfaceView)
