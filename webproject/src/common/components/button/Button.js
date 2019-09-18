//GLOBAL imports
import React, { Component } from "react";
import PropTypes from "prop-types";
//LOCAL imports
import "./Button.css";

class Button extends Component {
  render() {
    const { text, onClick, className } = this.props;
    const composedClass = ["button", className ? className : null].join(" ");
    return (
      <div onClick={onClick} className={composedClass}>
        {text}
      </div>
    );
  }
}

export default Button;

Button.defaultProps = {
  text: "OK"
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object
};
