//GLOBAL imports
import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Loader.css";

class Loader extends Component {
  render() {
    const { loading, children, text } = this.props;
    return (
      <React.Fragment>
        {loading ? <div className='loader'>{text}</div> : children}
      </React.Fragment>
    );
  }
}

export default Loader;

Loader.defaultProps = {
  text: "Loading..."
};

Loader.propTypes = {
  text: PropTypes.string,
  loading: PropTypes.bool.isRequired
};
