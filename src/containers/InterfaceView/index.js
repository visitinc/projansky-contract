import React, { Component } from 'react'
import { connect } from 'react-redux'
import { requestAccountAccess } from '../../core/libs/lib-metamask-helper'
import { bindActionCreators } from 'redux'
import * as uiActionCreators from 'core/actions/actions-ui'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ProjanskySales from "../../contracts/ProjanskySales.json"

class InterfaceView extends Component {
  componentDidMount() {
    const { provider: { web3Provider } } = this.props
    requestAccountAccess(act => console.log(act))
  }

  render() {
    const {
      address,
      actions:
      { ui: { setAddress } },
      tokens
    } = this.props;
    return (
      <div>
        <Grid className='container' container spacing={8}>
          <Typography variant="body1">
            This ui can be used to interact directly with a Projansky sales contract deployed on Ethereum.
          </Typography>
          <Typography variant="body1">
            No matter who currently owns a token, if you purchase a token for more than its original sale price, the creator will receive a portion of the sale as a royalty.
          </Typography>
        </Grid>
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
        <Grid className='container' container spacing={8} alignItems="center">
          <Grid item xs={12}>
            <List>
              {
                tokens.map(t => (
                  <ListItem key={t.id}>
                    <ListItemAvatar>
                      <Avatar>
                        {t.id}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={`Owned by ${`0xBE56F92aC63B2AB00693f7838f7247383c18d0b5`}`}
                      secondary={`Initially sold by ${t.creator} for ${t.initialPrice}Ξ`}
                    />
                    <ListItemSecondaryAction>
                      <Button style={{ marginRight: 30 }} size="small" color="secondary" variant="contained">
                        Buy for Ξ {t.price}
                      </Button>
                      <Button variant="contained" size="small">
                        Edit
                      </Button>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))
              }
            </List>
          </Grid>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    provider: state.provider,
    address: state.ui.address,
    tokens: state.ui.tokens,
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
