import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

/**
 * Redux mapStateToProps Function to get information from Redux Store.
 * @param {Object} reduxStore - Redux Store State
 * @returns {Object} - Relevant Data for App Component from Redux Store.
 */
const mapStateToProps = reduxStore => ({ frontScrollPosition: reduxStore.frontScrollPosition });

class ScrollRestoration extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname === '/' && prevProps.location.pathname !== '/' && this.props.frontScrollPosition) {
      window.scrollTo(0, this.props.frontScrollPosition);
    }
  }

  render() {
    return false;
  }
}

export default withRouter(connect(mapStateToProps)(ScrollRestoration));