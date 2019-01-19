import React, { Component } from 'react';

// Router
import { Route, Switch, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';

// Redux
import { connect } from 'react-redux';

// Components
import FrontPage from './pages/front-page';
import ScrollRestoration from './scroll-restoration';

/**
 * Redux mapStateToProps Function to get information from Redux Store.
 * @param {Object} reduxStore - Redux Store State
 * @returns {Object} - Relevant Data for App Component from Redux Store.
 */
const mapStateToProps = reduxStore => ({ reduxStore });

class App extends Component {
  state = {};

  render() {
    return ([
      <ScrollRestoration key="scroll-restoration" />,
      <main key={"main"}>
        <Switch key={'switch'}>
          <Route component={FrontPage} exact strict path={'/'} />
          <Redirect to={{ pathname: '/' }} />
        </Switch>
      </main>
    ]);
  }
}

export default withRouter(connect(mapStateToProps)(App));
