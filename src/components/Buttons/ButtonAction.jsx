import React from "react";
import PropTypes from "prop-types";
import "../../App.css";

const ButtonAction = (props) => {
  const { name, display } = props;
  return (
    <button className={`ButtonAction ${display}`} type="submit">
      {name}
    </button>
  );
};

ButtonAction.propTypes = {
  name: PropTypes.string.isRequired,
  display: PropTypes.string.isRequired,
};

export default ButtonAction;
