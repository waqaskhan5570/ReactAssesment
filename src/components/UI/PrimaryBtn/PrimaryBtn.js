import React from "react";
import "./PrimaryBtn.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PrimaryBtn = (props) => {
  const btnClassName = ["PrimaryBtn", `${props.size}`, `${props.color}`];
  const stylesheet = {};

  switch (props.type) {
    case "link":
      return (
        <Link
          style={stylesheet}
          to={props.to}
          className={btnClassName.join(" ")}
        >
          {props.children}
        </Link>
      );
    case "button":
      return (
        <button
          style={stylesheet}
          onClick={props.onClick}
          className={btnClassName.join(" ")}
          disabled={props.disabled ? props.disabled : false}
        >
          {props.children}
        </button>
      );
    default:
      return null;
  }
};

PrimaryBtn.propTypes = {
  type: PropTypes.oneOf(["link", "button"]).isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg", "cover"]).isRequired,
  color: PropTypes.oneOf([
    "black",
    "LinearBlack",
    "transparentBlack",
    "tranparentLinearBlack",
  ]).isRequired,
  to: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default PrimaryBtn;
