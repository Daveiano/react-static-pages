import React, { Component } from 'react';

// Router
import { Route, Switch, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';

// Redux
import { connect } from 'react-redux';

// Components
import FrontPage from './pages/front-page';
import ScrollRestoration from './scroll-restoration';

class App extends Component {
  render() {
    return ([
      <ScrollRestoration key="scroll-restoration" />,
      <header key={'header'} />,
      <Switch key={'switch'}>
        <Route component={FrontPage} exact strict path={'/'} />
        <Redirect to={{ pathname: '/' }} />
      </Switch>,
      <footer key={'footer'} />
    ]);
  }
}

export default withRouter(connect()(App));
