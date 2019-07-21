import React, { Component } from 'react'
import PropTypes            from 'prop-types'
import { withRouter }       from 'react-router-dom'
import AppBar               from 'components/AppBar'
import Typography           from 'components/Typography'
import Toolbar              from '@material-ui/core/Toolbar'
import IconButton           from '@material-ui/core/IconButton'
import Menu                 from '@material-ui/core/Menu'
import MenuItem             from '@material-ui/core/MenuItem'
import MenuIcon        from '@material-ui/icons/Menu'
import { appConfig }        from 'configs/config-main'
import { styles }           from './styles.scss'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      anchorEl: null
    }
  }

  getMenu() {
    const { anchorEl } = this.state

    return (
      <div>
        <IconButton
          aria-haspopup="true"
          color="inherit"
          className="dropdown"
          aria-owns={anchorEl ? 'simple-menu' : null}
          onClick={this.handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.close}
        >
          <MenuItem data-link="home" onClick={this.goTo}>About</MenuItem>
          <MenuItem data-link="interface" onClick={this.goTo}>Interface</MenuItem>
        </Menu>
      </div>
    )
  }

  goTo = (evt) => {
    const { history } = this.props
    const { link } = evt.currentTarget.dataset

    history.push(link)
    this.close()
  }

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget })
  }

  close = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const menu = this.getMenu()

    return (
      <div className={styles}>
        <AppBar>
          <Toolbar>
            <a href="#" style={{ color: 'white' }}>
              <Typography variant="title" color="inherit">
                {appConfig.name}
              </Typography>
            </a>
            {menu}
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

Header.propTypes = {
  history: PropTypes.shape({}).isRequired
}

export default withRouter(Header)
