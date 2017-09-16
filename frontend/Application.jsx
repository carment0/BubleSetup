import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

import ReduxStore from './store';

const Application = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <AppBar title="Buble" />
  </MuiThemeProvider>
);

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
