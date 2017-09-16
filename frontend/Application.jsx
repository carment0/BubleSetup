import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import ReduxStore from './store';


class Application extends React.Component {
  state = {
    open: false,
    anchorElement: undefined
  };

  handleMenuOpen = (e) => {
    e.preventDefault();
    this.setState({ open: true, anchorElement: e.currentTarget });
  }

  handleMenuClose = () => {
    this.setState({ open: false });
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div>
          <AppBar title="Buble" />
          <RaisedButton onClick={this.handleMenuOpen} label="Click me" />
          <Popover
            open={this.state.open}
            anchorEl={this.state.achorElement}
            anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
            targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            onRequestClose={this.handleMenuClose}>
            <Menu>
              <MenuItem primaryText="Project 1" />
              <MenuItem primaryText="Project 2" />
              <MenuItem primaryText="Project 3" />
            </Menu>
          </Popover>
        </div>
      </MuiThemeProvider>
    );
  }
}

const Router = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Route path="/" component={Application} />
    </HashRouter>
  </Provider>
);

Router.propTypes = {
  store: PropTypes.object.isRequired
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Router store={ReduxStore} />, document.getElementById('application'));
});
