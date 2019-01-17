import React, { Component } from 'react';

// 3rd Party
import { connect } from 'react-redux';

/**
 * Redux mapStateToProps Function to get information from Redux Store.
 * @param {Object} reduxStore - Redux Store State
 * @returns {Object} - Relevant Data for App Component from Redux Store.
 */
const mapStateToProps = reduxStore => ({ reduxStore });

class FrontPage extends Component {
  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}

export default connect(mapStateToProps)(FrontPage);
