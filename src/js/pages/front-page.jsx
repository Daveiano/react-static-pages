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
  state = {};

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Hello World!</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(FrontPage);
